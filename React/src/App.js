import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import Mockup from './Mockup';
import ListaItens from './components/ListaItens';

export default class App extends React.Component {

  mockup = null;

  constructor(props) {
    super(props);
    this.mockup = new Mockup();
    this.state = { qtdLinhas: 1000, itens: [], ordenacao: '' };

    this.handleChange = this.handleChange.bind(this);
    this.adicionarLinhas = this.adicionarLinhas.bind(this);
    this.excluir = this.excluir.bind(this);
    this.excluirVarias = this.excluirVarias.bind(this);
    this.limparTabela = this.limparTabela.bind(this);
    this.selecionarLinha = this.selecionarLinha.bind(this);
    this.atualizacaoParcial = this.atualizacaoParcial.bind(this);
    this.ordenarTabela = this.ordenarTabela.bind(this);
    this.trocarLinhas = this.trocarLinhas.bind(this);
  }

  handleChange(event) {
    this.setState({ qtdLinhas: event.target.value });
  }

  adicionarLinhas() {
    var itensInserir = [];
    for (let i = 0; i < this.state.qtdLinhas; i++) {

      var novoItem = this.mockup.obterAleatorio();

      itensInserir.push(novoItem);
    }
    this.setState({ itens: this.state.itens.concat(itensInserir) });
  }

  excluir(id) {
    var index = this.state.itens.findIndex((x) => x.id === id);
    if (index > -1) this.state.itens.splice(index, 1);
    this.forceUpdate();
  }

  excluirVarias() {
    if (this.state.qtdLinhas > this.state.itens.length) {
      alert("A tabela não contém esse número de linhas");
      return;
    }
    this.state.itens.splice(0, this.state.qtdLinhas);
    this.forceUpdate();
  }

  limparTabela() {
    this.setState({ itens: [] });
  }

  selecionarLinha(item) {
    var linhaSelecionada = this.state.itens.find((x) => x.selecionado);

    if (linhaSelecionada) linhaSelecionada.selecionado = false;

    item.selecionado = true;

    this.forceUpdate();
  }

  atualizacaoParcial() {
    var itensAux = this.state.itens;
    for (let i = 0; i < itensAux.length; i += 10) {
      itensAux[i].descricao += " atualizado";
    }
    this.setState({ itens: itensAux });
  }

  ordenarTabela(tipo) {
    this.state.ordenacao = tipo;

    this.setState({
      itens: this.state.itens.sort((a, b) => {
        if (tipo === 'asc') {
          if (a.descricao > b.descricao) return 1;

          if (a.descricao < b.descricao) return -1;

          return 0;
        } else if (tipo === 'desc') {
          if (a.descricao > b.descricao) return -1;

          if (a.descricao < b.descricao) return 1;

          return 0;
        }
      })
    });
  }

  trocarLinhas() {
    var i = 0;
    var j = this.state.itens.length - 1;

    var aux = {
      id: this.state.itens[i].id,
      descricao: this.state.itens[i].descricao,
      selecionado: this.state.itens[i].selecionado,
    };

    this.state.itens[i].id = this.state.itens[j].id;
    this.state.itens[i].descricao = this.state.itens[j].descricao;
    this.state.itens[i].selecionado = this.state.itens[j].selecionado;

    this.state.itens[j].id = aux.id;
    this.state.itens[j].descricao = aux.descricao;
    this.state.itens[j].selecionado = aux.selecionado;

    this.forceUpdate();
  }

  render() {
    return (
      <div className="App container">
        <h2 id="titulo">Implementado com <span id="nomeFramework">React</span></h2>

        <div className="row">
          <div className="col-3">
            <label htmlFor="qtdLinhas">Adicionar / remover linhas</label>
            <div className="input-group">
              <input
                onFocus={(event) => event.target.select()}
                name="qtdLinhas"
                type="number"
                className="form-control"
                value={this.state.qtdLinhas}
                onChange={this.handleChange}
              />
              <div className="input-group-append">
                <button id="adicionarLinhas" className="btn btn-success" onClick={this.adicionarLinhas}>
                  <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                </button>
                <button id="excluirLinhas" className="btn btn-danger" onClick={this.excluirVarias}>
                  <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </button>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="dropdown">
              <button
                id="btnAcoes"
                type="button"
                className="btn btn-secondary dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{marginTop: '32px'}}
              >
                Ações
          </button>
              <div className="dropdown-menu" aria-labelledby="btnAcoes">
                <a id="acaoLimparTabela" className="dropdown-item" href="#" onClick={this.limparTabela}
                >Limpar tabela</a
                >
                <a id="acaoAtualizacaoParcial" className="dropdown-item" href="#" onClick={this.atualizacaoParcial}
                >Atualização parcial</a
                >
                <a id="acaoTrocarLinhas" className="dropdown-item" href="#" onClick={this.trocarLinhas}
                >Trocar linhas</a
                >
                <a id="acaoOrdenarCrescente" className="dropdown-item" href="#" onClick={() => this.ordenarTabela('asc')}
                >Ordenar de forma crescente</a
                >
                <a id="acaoOrdenarDecrescente" className="dropdown-item" href="#" onClick={() => this.ordenarTabela('desc')}
                >Ordenar de forma decrescente</a
                >
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-12">
            <div className="table-responsive">
              <table className="table table-striped table-bordered table-sm table-hover">
                <thead className="thead-dark">
                  <tr>
                    <th>#</th>
                    <th>Descrição</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <ListaItens itens={this.state.itens} excluirLinha={this.excluir} selecionarLinha={this.selecionarLinha}></ListaItens>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div >
    );
  }


}
