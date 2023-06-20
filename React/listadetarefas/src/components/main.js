import React, { Component } from 'react';

//  Form

import { FaPlus } from 'react-icons/fa';

import './main.css';

export default class Main extends Component {
  state = {
    novaTarefa: '',
  };

  handleChange = (e) => {
    this.setState({ novaTarefa: e.target.value });
  };

  render() {
    const { novaTarefa } = this.state;
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
      </div>
    );
  }
}

