import React, { Component } from "react";

//  Form
import { FaPlus, FaEdit, FaWindowClose } from "react-icons/fa";

//  Lista de tarefas
// import { FaEdit, FaWindowClose } from 'react-icons/fa';

import "./main.css";

export default class Main extends Component {
  state = {
    novaTarefa: "",
    tarefas: [],
  };

  handleChange = (e) => {
    this.setState({ novaTarefa: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();

    if (tarefas.indexOf(novaTarefa) !== -1) return;

    const novasTarefas = [...tarefas];
    this.setState({
      tarefas: [...novasTarefas, novaTarefa],
    });
  };

  handleEdit = (e, index) => {
    console.log('Edit', index);
    this.setState();
  };

  handleDelete = (e, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);

    this.setState({
      tarefas: [...novasTarefas],
    });
  };

  render() {
    const { novaTarefa, tarefas } = this.state;
    return (
      <div className="main">
        <h1>Lista de tarefas</h1>

        <form
          action="#"
          className="form"
          onSubmit={this.handleSubmit}
        >
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
          {tarefas.map((tarefa, index) => (
            <li key={tarefa}>
              {tarefa}
              <span>
                <FaEdit
                  className="edit"
                  onClick={(e) => this.handleEdit(e, index)}
                />
                <FaWindowClose
                  className="delete"
                  onClick={(e) => this.handleDelete(e, index)}
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
