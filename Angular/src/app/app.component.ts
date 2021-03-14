import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import Mockup from './Mockup';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contadorId = 1;
  qtdLinhas = 1000;
  itens = [];
  ordenacao = '';
  mockup : Mockup = null;

  ngOnInit(){
    this.mockup = new Mockup();
  }

  excluir(id: Number) {
    var index = this.itens.findIndex(x => x.id === id);
    if (index > -1) this.itens.splice(index, 1);
  }

  excluirVarias() {
    if (this.qtdLinhas > this.itens.length) {
      alert("A tabela não contém esse número de linhas");
      return;
    }
    this.itens.splice(0, this.qtdLinhas);
  }

  limparTabela() {
    this.itens = [];
  }

  adicionarLinhas() {
    var itensInserir = [];
      for (let i = 0; i < this.qtdLinhas; i++) {
        
        var novoItem = this.mockup.obterAleatorio();

        itensInserir.push(novoItem);
      }

      this.itens = this.itens.concat(itensInserir);
  }

  atualizacaoParcial() {
    for (let i = 0; i < this.itens.length; i += 10) {
      this.itens[i].descricao += " atualizado";
    }
  }

  trocarLinhas(i = undefined, j = undefined) {
    if (i == undefined) i = 0;

    if (j == undefined) j = this.itens.length - 1;

    var aux = {
      id: this.itens[i].id,
      descricao: this.itens[i].descricao,
      selecionado: this.itens[i].selecionado,
    };

    this.itens[i].id = this.itens[j].id;
    this.itens[i].descricao = this.itens[j].descricao;
    this.itens[i].selecionado = this.itens[j].selecionado;

    this.itens[j].id = aux.id;
    this.itens[j].descricao = aux.descricao;
    this.itens[j].selecionado = aux.selecionado;

  }

  ordenarTabela(tipo: string) {
    this.ordenacao = tipo;

    this.itens = this.itens.sort((a, b) => {
      if (tipo == "asc") {
        if (a.descricao > b.descricao) return 1;

        if (a.descricao < b.descricao) return -1;

        return 0;
      } else if (tipo == "desc") {
        if (a.descricao > b.descricao) return -1;

        if (a.descricao < b.descricao) return 1;

        return 0;
      }
    });
  }

  selecionarLinha(item: any) {
    var linhaSelecionada = this.itens.find((x) => x.selecionado);

    if (linhaSelecionada) linhaSelecionada.selecionado = false;

    item.selecionado = true;
  }

  retornarClasseLinhaSelecionada(item) {
    return { "linha-selecionada": item.selecionado };
  }

}
