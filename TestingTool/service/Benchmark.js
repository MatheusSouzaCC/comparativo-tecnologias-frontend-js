import { logging } from 'selenium-webdriver'
import LogDesempenho from './LogDesempenho';
import Resultado from './Resultado';
import PaginaInicialFramework from '../pages/paginaInicialFramework';
import getDriver from '../driverutil/driverutil';

export default class Benchmark {

    constructor(framework = '', teste = '', tipo = 'desempenho') {
        this.framework = framework.toLowerCase();
        this.teste = teste.toLowerCase();

        if (tipo == 'memoria')
            this.teste = "MEMORIA - " + this.teste;

        this.resultados = [];
        this.fs = require('fs');
        this.gravarArquivo = true;
        this.tipo = tipo;
    }


    async iniciar(funcaoPrepararAmbiente, funcaoBenchmark, numeroExecucoes = 10) {
        for (let i = 0; i < numeroExecucoes; i++) {
            let driver = getDriver();
            let paginaInicialFramework = new PaginaInicialFramework(driver);
            await paginaInicialFramework.navegar();

            if (funcaoPrepararAmbiente)
                await funcaoPrepararAmbiente(paginaInicialFramework);


            if (this.tipo == 'memoria') //força o GC antes de executar o teste, para liberar memória
                await this.forcarGC(driver);

            await driver.executeScript("console.timeStamp('benchmarkIniciado')");
            await funcaoBenchmark(paginaInicialFramework);

            if (this.tipo == 'memoria')//força o GC depois de executar o teste, para coletar a memória utilizada
                await this.forcarGC(driver);

            await this.coletarResultados(driver);
            await driver.quit();
        }

        if (this.gravarArquivo)
            this.salvar();
    }

    async coletarResultados(driver) {
        await driver.executeScript("console.timeStamp('benchmarkFinalizado')");

        var eventosFiltrados = await this.filtrarEventosRelevantes(driver);

        var indexInicioBenchmark = eventosFiltrados.findIndex(x => x.tipo == 'benchmarkIniciado');
        var indexFimBenchmark = eventosFiltrados.findIndex(x => x.tipo == 'benchmarkFinalizado');

        var eventosBenchmark = eventosFiltrados.slice(indexInicioBenchmark, indexFimBenchmark);


        //obtem o index do primeiro evento do tipo CLICK
        var indexClick = eventosBenchmark.findIndex(x => x.tipo == 'click');
        //pega o click
        var click = eventosBenchmark[indexClick];

        //pega todos os eventos que ocorreram depois do click
        var eventosAposClick = eventosBenchmark.slice(indexClick);
        //filtra os eventos do tipo PAINT após o evento de CLICK
        var paints = eventosAposClick.filter(x => x.tipo == 'paint');

        var gcs = eventosBenchmark.filter(x => x.tipo == 'gc');

        var resultado = new Resultado(click, paints, gcs);
        resultado.logar();
        this.resultados.push(resultado);
    }

    obterMediaAritmeticaDuracao() {
        var somaTotal = this.resultados.reduce((acc, resultado) => acc + resultado.duracaoTotal, 0);
        return somaTotal / this.resultados.length;
    }

    obterMediaAritmeticaMemoria() {
        var somaTotal = this.resultados.reduce((acc, resultado) => {
            if (resultado.memoriaUtilizada)
                return acc + resultado.memoriaUtilizada;
            return 0;
        }, 0);

        return somaTotal / this.resultados.length;
    }

    salvar() {
        var data = new Date();

        //cria o titulo do aqruivo, com base no nome do teste e na data/hora atual
        var titulo = `${this.teste} ${data.getDate()}-${data.getMonth() + 1}-${data.getFullYear()} ${data.getHours()}-${data.getMinutes()}-${data.getSeconds()}.json`

        //grava o arquivo
        this.fs.writeFile(`benchmarks/${this.framework}/${titulo}`, this.toJson(), function (err) {
            if (err) {
                console.error(err);
            }
        });
    }

    toJson() {
        var retorno = {
            framework: this.framework,
            teste: this.teste,
            mediaAritmeticaDuracao: this.obterMediaAritmeticaDuracao(),
            resultados: this.resultados
        }

        if (this.tipo == 'memoria')
            retorno.mediaAritmeticaMemoria = this.obterMediaAritmeticaMemoria();

        return JSON.stringify(retorno);
    }

    async filtrarEventosRelevantes(driver) {
        var eventosFiltrados = [];
        var entries = await driver.manage().logs().get(logging.Type.PERFORMANCE);

        entries.forEach(x => {
            let e = JSON.parse(x.message).message;

            if (e.params.name === 'TimeStamp' && (e.params.args.data.message === 'benchmarkIniciado' || e.params.args.data.message === 'benchmarkFinalizado')) {
                eventosFiltrados.push(new LogDesempenho(e.params.args.data.message, e));
            }

            if (e.params.name === 'EventDispatch' && e.params.args.data.type === 'click') {
                eventosFiltrados.push(new LogDesempenho('click', e));
            } else if (e.params.name === 'Paint') {
                eventosFiltrados.push(new LogDesempenho('paint', e));
            } else if (e.params.name === 'MajorGC' && e.params.args.usedHeapSizeAfter) {
                eventosFiltrados.push(new LogDesempenho('gc', e));
            }
        });
        return eventosFiltrados;
    }

    async forcarGC(driver) {
        for (let i = 0; i < 5; i++) {
            await driver.executeScript("window.gc();");
        }
    }
}