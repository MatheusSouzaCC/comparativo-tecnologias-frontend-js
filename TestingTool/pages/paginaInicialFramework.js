import { By, until } from "selenium-webdriver";

export default class PaginaInicialFramework {

    constructor(driver) {
        this.driver = driver;

        this.objetosPagina = {
            inputQtdLinhas: By.name('qtdLinhas'),
            botaoAdicionar: By.id('adicionarLinhas'),
            botaoExcluir: By.id('excluirLinhas'),
            botaoAcoes: By.id('btnAcoes'),
            acaoLimparTabela: By.id('acaoLimparTabela'),
            acaoAtualizacaoParcial: By.id('acaoAtualizacaoParcial'),
            acaoTrocarLinhas: By.id('acaoTrocarLinhas'),
            acaoOrdenarCrescente: By.id('acaoOrdenarCrescente'),
            acaoOrdenarDecrescente: By.id('acaoOrdenarDecrescente'),
            tabela: By.css('table'),
            nomeFramework: By.id('nomeFramework')
        };
    }

    esperarAteEstarVisivel() {
        return this.driver.wait(until.elementLocated(this.objetosPagina.inputQtdLinhas));
    }

    navegar() {
        var url;
        var framework = process.env.FRAMEWORK || 'vue';
        switch (framework.toUpperCase()) {
            case 'VUE':
                url = 'http://localhost:8080/';
                break;
            case 'ANGULAR':
                url = 'http://localhost:8081/';
                break;
            case 'REACT':
                url = 'http://localhost:8082/';
                break;
            default:
                url = 'http://localhost:8080/';
                break;
        }
        this.driver.navigate().to(url);
        return this.esperarAteEstarVisivel();
    }

    digitarQuantidade(quantidade) {
        return this.driver.findElement(this.objetosPagina.inputQtdLinhas).sendKeys(quantidade.toString());
    }

    afirmarQuantidade(quantidade) {
        return this.driver.findElement(this.objetosPagina.inputQtdLinhas).getAttribute('value').then(x => x == quantidade);
    }

    async adicionarLinhas(quantidade) {
        await this.digitarQuantidade(quantidade);
        return this.clicar(this.objetosPagina.botaoAdicionar);
    }

    async excluirLinhas(quantidade) {
        await this.digitarQuantidade(quantidade);
        return this.clicar(this.objetosPagina.botaoExcluir);
    }

    abrirMenuAcoes() {
        return this.driver.findElement(this.objetosPagina.botaoAcoes).then(elem => {
            this.driver.actions().move({origin: elem}).perform();
        });
    }

    async limparTabela() {
        await this.abrirMenuAcoes();
        return this.clicar(this.objetosPagina.acaoLimparTabela);
    }

    async realizarAtualizacaoParcial() {
        await this.abrirMenuAcoes();
        return  this.clicar(this.objetosPagina.acaoAtualizacaoParcial);
    }

    async trocarLinhas() {
        await this.abrirMenuAcoes();
        return this.clicar(this.objetosPagina.acaoTrocarLinhas);
    }

    async ordenar(ordem = 'asc') {
        await this.abrirMenuAcoes();

        if (ordem == 'asc') {
            return this.clicar(this.objetosPagina.acaoOrdenarCrescente);
        } else if (ordem == 'desc') {
            return this.clicar(this.objetosPagina.acaoOrdenarDecrescente);
        }
    }

    obterNomeFramework(){
        return this.driver.findElement(this.objetosPagina.nomeFramework).getText();
    }

    async clicarLinha(indexLinha = 0){
        var tabela = await this.driver.findElement(this.objetosPagina.tabela);
        var linhas = await tabela.findElements(By.css('tbody > tr.clicavel'));
        return linhas[indexLinha].click();
    }

    async excluirLinha(indexLinha = 0){
        var tabela = await this.driver.findElement(this.objetosPagina.tabela);
        var linhas = await tabela.findElements(By.css('tbody > tr.clicavel'));
        var linhaExcluir = linhas[indexLinha];

        return linhaExcluir.findElement(By.css('td > button.botao-excluir')).click();
    }

    async clicar(elemento){
        //workaround - no firefox acontecem algumas excessões e esperar até o elemento estar visivel na tela corrige esses casos
        await this.driver.wait(until.elementLocated(elemento));
        return await this.driver.findElement(elemento).click();
    }

}