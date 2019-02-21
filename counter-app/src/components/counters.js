import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = (counterId) => {
    const counters_ = this.state.counters.filter(c => c.id !== counterId)
    this.setState({counters : counters_})
    console.log("delete cllaed", counterId);
  };
  render() {
    return (
      <div>
        <button 
        className ="button btn btn-primary btn-sm m-2" 
        onClick={this.handleReset}
        >
        Reset
        </button>
        {this.state.counters.map(c => (
          <Counter
            key={c.id}
            counter = {c}
            onDelete={this.handleDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
