export default class LogDesempenho {

    constructor(tipo, evento) {
        this.tipo = tipo;

        if (evento.params) {
            this.inicio = +evento.params.ts;
            this.duracao = +evento.params.dur || 0;
            this.fim = this.inicio + this.duracao;

            //memória
            if(tipo == 'gc'){
                this.memoriaUtilizada = +evento.params.args.usedHeapSizeAfter/1024/1024;
            }
        }

        this.evento = evento;
    }

}