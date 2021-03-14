export default class Resultado {

    constructor(click, paints, gcs) {

        //se foi passado um click, calcula o resultado com base no click
        if (click) {
            this.duracaoClick = click.duracao / 1000;
            this.duracaoPainting = paints.reduce(this._reducer, 0) / 1000;

            var inicioClick = click.inicio;
            var ultimoPaint = this.retornarUltimoPaint(paints);
            this.duracaoTotal = (ultimoPaint.fim - inicioClick) / 1000;

            if (gcs.length > 0)
                this.memoriaUtilizada = gcs[gcs.length - 1].memoriaUtilizada;
        } else { // se não houve click, somente coleta os eventos de painting
            this.duracaoClick = 0;
            this.duracaoPainting = paints.reduce(this._reducer, 0) / 1000;;
            this.duracaoTotal = 0;
        }
    }

    logar() {
        console.log(`Scripting: ${this.duracaoClick} ms`);
        console.log(`Painting: ${this.duracaoPainting} ms`);
        console.log(`Inicio click ate fim painting: ${this.duracaoTotal} ms`);

        if (this.memoriaUtilizada)
            console.log(`Memória utilizada: ${this.memoriaUtilizada} MB`);
    }

    retornarUltimoPaint(paints) {
        var ultimoPaint = null;

        paints.forEach(paint => {
            if (ultimoPaint == null)
                ultimoPaint = paint;
            else if (paint.fim >= ultimoPaint.fim)
                ultimoPaint = paint;
        });
        return ultimoPaint;
    }

    _reducer(acc, paint) {
        if (paint.duracao)
            return acc + paint.duracao;
        return acc;
    }
}