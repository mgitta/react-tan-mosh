import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    tags: ["tag1", "tag2", "tag3"]
  };

  constructor() {
    super(...arguments);
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  styles = {
    fontSize: 50,
    fontWeight: "bold"
  };

  handleIncrement = product => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  doHandleIncrement = () => {
    this.handleIncrement({ id: 1 });
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p> There are no tags</p>;
    else
      return (
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      );
  }

  render() {
    let classes = this.getBadgeClasses();
    console.log("props0", this.props);
    return (
      // <React.Fragment>
      //   <span className={classes}>{this.formatCount()}</span>
      //   <button className="btn btn-secondary btn-sm">Increment</button>
      //   <ul>
      //     {this.state.tags.map(tag => (
      //       <li key={tag}>{tag}</li>
      //     ))}
      //   </ul>
      // </React.Fragment>
      <div>
        {/* {this.state.tags.length === 0 && "Please create new tag!"}
        {this.renderTags()} */}
        <span className={classes}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={this.doHandleIncrement}
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={this.props.onDelete}
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
