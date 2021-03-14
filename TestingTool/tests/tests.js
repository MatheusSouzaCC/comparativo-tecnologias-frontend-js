// import PaginaInicialFramework from '../pages/paginaInicialFramework';
// import { assert, expect } from 'chai';
// import getDriver from '../driverutil/driverutil';
// import Benchmark from '../service/Benchmark';
// import Resultado from '../service/Resultado';
// {
//     describe, before, after, it
// }

// describe('Testando framework', function () {
//     this.timeout(7200000);// 2 horas

//     executarTestes('desempenho');
//     executarTestes('memoria');
//     //testarProgressaoAdicaoLinhas();
//     //testarProgressaoOrdenacao();


//     // it('teste', async function () {

//     //     // var driver = await getDriver();
//     //     // var paginaInicialFramework = new PaginaInicialFramework(driver);
//     //     // await paginaInicialFramework.navegar();
//     //     let framework = process.env.FRAMEWORK || 'vue';
//     //     var bench = new Benchmark(framework, 'teste');
//     //     bench.gravarArquivo = false;

//     //     await bench.iniciar(null, (paginaInicialFramework) => paginaInicialFramework.adicionarLinhas(1000));
//     // });



// });

// function testarProgressaoAdicaoLinhas() {
//     let framework = process.env.FRAMEWORK || 'vue';

//     const b1 = 'Adiciona 1000 linhas em uma tabela vazia';
//     it(b1, async function () {

//         var bench = new Benchmark(framework, b1, 'desempenho');

//         await bench.iniciar(null, (paginaInicialFramework) => paginaInicialFramework.adicionarLinhas(1000));
//     });

//     for (let i = 10000; i <= 100000; i += 10000) {
//         let b = `Adiciona ${i} linhas em uma tabela vazia`;
//         it(b, async function () {

//             var bench = new Benchmark(framework, b, 'desempenho');

//             await bench.iniciar(null, (paginaInicialFramework) => paginaInicialFramework.adicionarLinhas(i));
//         });

//     }
// }

// function testarProgressaoOrdenacao() {
//     let framework = process.env.FRAMEWORK || 'vue';

//     for (let i = 1000; i <= 10000; i += 1000) {
//         let b = `Realiza ordenação crescente em uma tabela com ${i} registros`;
//         it(b, async function () {

//             var bench = new Benchmark(framework, b, 'desempenho');

//             await bench.iniciar(
//                 (paginaInicialFramework) => paginaInicialFramework.adicionarLinhas(i),
//                 (paginaInicialFramework) => paginaInicialFramework.ordenar('asc')
//             );
//         });
//     }

// }

// function executarTestes(tipo) {
//     let framework = process.env.FRAMEWORK || 'vue';

//     it('Valida o framework', async () => {
//         let driver = await getDriver();
//         let paginaInicialFramework = new PaginaInicialFramework(driver);
//         await paginaInicialFramework.navegar();

//         var nomeFramework = '';

//         switch (framework.toUpperCase()) {
//             case 'VUE':
//                 nomeFramework = 'Vue.js';
//                 break;
//             case 'ANGULAR':
//                 nomeFramework = 'Angular';
//                 break;
//             case 'REACT':
//                 nomeFramework = 'React';
//                 break;
//             default:
//                 nomeFramework = 'Vue.js';
//                 break;
//         }

//         expect(nomeFramework).to.equal(await paginaInicialFramework.obterNomeFramework());
//         await driver.quit();
//     });

//     const b1 = 'Adiciona 1000 linhas em uma tabela vazia';
//     it(b1, async function () {

//         var bench = new Benchmark(framework, b1, tipo);

//         await bench.iniciar(null, (paginaInicialFramework) => paginaInicialFramework.adicionarLinhas(1000));
//     });


//     const b2 = 'Adiciona 10000 linhas em uma tabela vazia';
//     it(b2, async function () {

//         var bench = new Benchmark(framework, b2, tipo);

//         await bench.iniciar(null, (paginaInicialFramework) => paginaInicialFramework.adicionarLinhas(10000));
//     });


//     const b3 = 'Realiza atualização parcial em uma tabela com 10000 registros';
//     it(b3, async function () {

//         var bench = new Benchmark(framework, b3, tipo);

//         await bench.iniciar(
//             (paginaInicialFramework) => paginaInicialFramework.adicionarLinhas(10000),
//             (paginaInicialFramework) => paginaInicialFramework.realizarAtualizacaoParcial()
//         );
//     });

//     const b4 = 'Troca linhas em uma tabela com 10000 registros';
//     it(b4, async function () {

//         var bench = new Benchmark(framework, b4, tipo);

//         await bench.iniciar(
//             (paginaInicialFramework) => paginaInicialFramework.adicionarLinhas(10000),
//             (paginaInicialFramework) => paginaInicialFramework.trocarLinhas()
//         );
//     });

//     const b5 = 'Realiza ordenação crescente em uma tabela com 10000 registros';
//     it(b5, async function () {

//         var bench = new Benchmark(framework, b5, tipo);

//         await bench.iniciar(
//             (paginaInicialFramework) => paginaInicialFramework.adicionarLinhas(10000),
//             (paginaInicialFramework) => paginaInicialFramework.ordenar('asc')
//         );
//     });

//     const b6 = 'Clica na linha 5000 em uma tabela com 10000 registros';
//     it(b6, async function () {

//         var bench = new Benchmark(framework, b6, tipo);

//         await bench.iniciar(
//             (paginaInicialFramework) => paginaInicialFramework.adicionarLinhas(10000),
//             (paginaInicialFramework) => paginaInicialFramework.clicarLinha(4999)
//         );
//     });

//     const b7 = 'Exclui a linha 5000 em uma tabela com 10000 registros';
//     it(b7, async function () {

//         var bench = new Benchmark(framework, b7, tipo);

//         await bench.iniciar(
//             (paginaInicialFramework) => paginaInicialFramework.adicionarLinhas(10000),
//             (paginaInicialFramework) => paginaInicialFramework.excluirLinha(4999)
//         );
//     });

//     const b8 = 'Adicionar 1000 linhas em uma tabela com 10000 linhas';
//     it(b8, async function () {

//         var bench = new Benchmark(framework, b8, tipo);

//         await bench.iniciar(
//             (paginaInicialFramework) => paginaInicialFramework.adicionarLinhas(10000),
//             (paginaInicialFramework) => paginaInicialFramework.adicionarLinhas(1000)
//         );
//     });

//     const b9 = 'Limpar tabela com 10000 linhas';
//     it(b9, async function () {

//         var bench = new Benchmark(framework, b9, tipo);

//         await bench.iniciar(
//             (paginaInicialFramework) => paginaInicialFramework.adicionarLinhas(10000),
//             (paginaInicialFramework) => paginaInicialFramework.limparTabela()
//         );
//     });

//     const b10 = 'Tempo de inicialização';
//     it(b10, async function () {
//         var bench = new Benchmark(framework, b10, tipo);

//         for (let i = 0; i < 10; i++) {
//             let driver = getDriver();
//             let paginaInicialFramework = new PaginaInicialFramework(driver);

//             await driver.executeScript("console.timeStamp('benchmarkIniciado')");
//             await paginaInicialFramework.navegar();
//             await driver.executeScript("console.timeStamp('benchmarkFinalizado')");

//             var eventos = await bench.filtrarEventosRelevantes(driver);

//             var indexInicioBenchmark = eventos.findIndex(x => x.tipo == 'benchmarkIniciado');
//             var indexFimBenchmark = eventos.findIndex(x => x.tipo == 'benchmarkFinalizado');
//             var eventoInicio = eventos[indexInicioBenchmark];

//             var eventosBenchmark = eventos.slice(indexInicioBenchmark, indexFimBenchmark);
//             var paints = eventosBenchmark.filter(x => x.tipo == 'paint');
//             var resultado = new Resultado(null, paints);

//             var ultimoPaint = resultado.retornarUltimoPaint(paints);
//             resultado.duracaoTotal = (ultimoPaint.fim - eventoInicio.inicio) / 1000;

//             bench.resultados.push(resultado);

//             await driver.quit();
//         }

//         bench.salvar();
//     });

//     const b11 = 'Clica na primeira linha de uma tabela com 1000 linhas';
//     it(b11, async function () {

//         var bench = new Benchmark(framework, b11, tipo);

//         await bench.iniciar(
//             (paginaInicialFramework) => paginaInicialFramework.adicionarLinhas(1000),
//             (paginaInicialFramework) => paginaInicialFramework.clicarLinha(0)
//         );
//     });
// }