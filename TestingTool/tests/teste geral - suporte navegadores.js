import PaginaInicialFramework from '../pages/paginaInicialFramework';
import getDriver from '../driverutil/driverutil';
{
    describe, before, after, it
}

var driver, paginaInicialFramework;

before(async function(){
    driver = getDriver();
    paginaInicialFramework = new PaginaInicialFramework(driver);
    await paginaInicialFramework.navegar();
});

describe('Testando a aplicação', function () {
    this.timeout(7200000);// 2 horas

    it("Adciona linhas na tabela", async function(){
        await paginaInicialFramework.adicionarLinhas(5000);
    });

    it("Remove linhas da tabela", async function(){
        await paginaInicialFramework.excluirLinhas(1000);
    });

    it("Seleciona a primeira linha", async function(){
        await paginaInicialFramework.clicarLinha(0);
    });

    it("Exclui a primeira linha", async function(){
        await paginaInicialFramework.excluirLinha(0);
    });

    it("Ordena a tabela asc e depois desc", async function(){
        await paginaInicialFramework.ordenar("asc");
        await paginaInicialFramework.ordenar("desc");
    });

    it("Realizar atualização parcial", async function(){
        await paginaInicialFramework.realizarAtualizacaoParcial();
    });

    it("Troca as linhas da tabela", async function(){
        await paginaInicialFramework.trocarLinhas();
    });
    
    it("Limpa tabela", async function(){
        await paginaInicialFramework.limparTabela();
    });
    
    
});