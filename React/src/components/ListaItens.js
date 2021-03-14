import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default class ListaItens extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.itens) {

      return this.props.itens.map((item, index) => (
        <tr className={`clicavel ${item.selecionado ? 'linha-selecionada' : ''}`} key={item.id} onClick={() => this.props.selecionarLinha(item)}>
          <td>{index + 1}</td>
          <td>{item.descricao}</td>
          <td className="centralizado">
            <button
              className="btn btn-sm btn-danger botao-excluir"
              onClick={() => this.props.excluirLinha(item.id)}
            >
              <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
            </button>
          </td>
        </tr>
      ));
    }

    return null;
  }
}