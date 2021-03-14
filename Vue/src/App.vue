<template>
  <div id="app" class="container">
    <h2 id="titulo">Implementado com <span id="nomeFramework">Vue.js</span></h2>
    <div class="row">
      <div class="col-3">
        <label for="qtdLinhas">Adicionar / remover linhas</label>
        <div class="input-group">
          <input
            onfocus="this.select()"
            v-model="qtdLinhas"
            name="qtdLinhas"
            type="number"
            class="form-control"
          />
          <div class="input-group-append">
            <button id="adicionarLinhas" @click="adicionarLinhas()" class="btn btn-success">
              <font-awesome-icon icon="plus" />
            </button>
            <button id="excluirLinhas" @click="excluirVarias()" class="btn btn-danger">
              <font-awesome-icon icon="trash" />
            </button>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="dropdown">
          <button
            id="btnAcoes"
            type="button"
            class="btn btn-secondary dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            style="margin-top: 32px"
          >
            Ações
          </button>
          <div class="dropdown-menu" aria-labelledby="btnAcoes">
            <a id="acaoLimparTabela" class="dropdown-item" href="#" @click="limparTabela()"
              >Limpar tabela</a
            >
            <a id="acaoAtualizacaoParcial" class="dropdown-item" href="#" @click="atualizacaoParcial()"
              >Atualização parcial</a
            >
            <a id="acaoTrocarLinhas" class="dropdown-item" href="#" @click="trocarLinhas()"
              >Trocar linhas</a
            >
            <a id="acaoOrdenarCrescente" class="dropdown-item" href="#" @click="ordenarTabela('asc')"
              >Ordenar de forma crescente</a
            >
            <a id="acaoOrdenarDecrescente" class="dropdown-item" href="#" @click="ordenarTabela('desc')"
              >Ordenar de forma decrescente</a
            >
          </div>
        </div>
      </div>
    </div>
    <br />
    <div class="row">
      <div class="col-12">
        <div class="table-responsive">
          <table class="table table-striped table-bordered table-sm table-hover">
            <thead class="thead-dark">
              <th>#</th>
              <th>Descrição</th>
              <th></th>
            </thead>
            <tbody>
              <tr
                v-for="(item, index) in itens"
                :key="item.id"
                class="clicavel"                
                :class="item.selecionado ? 'linha-selecionada' : ''"
                @click="selecionarLinha(item)"
              >
                <td>{{ index + 1 }}</td>
                <td>{{ item.descricao }}</td>
                <td class="centralizado">
                  <button
                    class="btn btn-sm btn-danger botao-excluir"
                    @click="excluir(item.id)"
                  >
                    <font-awesome-icon icon="trash"></font-awesome-icon>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Mockup from "../src/Mockup.js";

export default {
  name: 'app',
  data: function () {
    return {
      mockup: null,
      qtdLinhas: 1000,
      itens: [],
      ordenacao: '',
    };
  },
  methods: {
    excluir(id) {
      var index = this.itens.findIndex((x) => x.id === id);
      if (index > -1) this.itens.splice(index, 1);
    },
    excluirVarias() {
      if (this.qtdLinhas > this.itens.length) {
        alert("A tabela não contém esse número de linhas");
        return;
      }
      this.itens.splice(0, this.qtdLinhas);
    },
    limparTabela() {
      this.itens = [];
    },
    adicionarLinhas() {
      var itensInserir = [];
      for (let i = 0; i < this.qtdLinhas; i++) {
        
        var novoItem = this.mockup.obterAleatorio();

        itensInserir.push(novoItem);
      }

      this.itens = this.itens.concat(itensInserir);
    },
    selecionarLinha(item) {
      var linhaSelecionada = this.itens.find((x) => x.selecionado);

      if (linhaSelecionada) linhaSelecionada.selecionado = false;

      item.selecionado = true;
    },
    ordenarTabela(tipo) {
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
    },
    atualizacaoParcial() {
      for (let i = 0; i < this.itens.length; i += 10) {
        this.itens[i].descricao += " atualizado";
      }
    },
    trocarLinhas(i, j) {
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
  },
  created() {
    this.mockup = new Mockup();
  }
};
</script>

<style>
.centralizado {
  text-align: center;
}

.linha-selecionada {
  background-color: lightblue !important;
}

.clicavel{
  cursor: pointer;
}

.dropdown:hover>.dropdown-menu {
    display: block;
  }
  
  .dropdown > .dropdown-toggle:active {
    /*Without this, clicking will make it sticky*/
    pointer-events: none;
  }
</style>
