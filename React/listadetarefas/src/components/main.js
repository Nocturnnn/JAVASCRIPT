import React, { Component } from "react";

//  Form
import { FaPlus, FaEdit, FaWindowClose } from "react-icons/fa";

//  Lista de tarefas
// import { FaEdit, FaWindowClose } from 'react-icons/fa';

import "./main.css";

export default class Main extends Component {
  state = {
    novaTarefa: "",
    tarefas: ["Fazer café", "Beber água", "Estudar"],
  };

  handleChange = (e) => {
    this.setState({ novaTarefa: e.target.value });
  };

  render() {
    const { novaTarefa, tarefas } = this.state;
    return (
      <div className="main">
        <h1>Lista de tarefas</h1>

        <form action="#" className="form">
          <input
            value={novaTarefa}
            onChange={this.handleChange}
            type="text"
            placeholder="Adicione uma nova tarefa"
          />
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tarefas">
          {tarefas.map((tarefa) => (
            <li key={tarefa}>
              {tarefa}
              <div>
                <FaEdit className="edit" />
                <FaWindowClose className="delete" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
