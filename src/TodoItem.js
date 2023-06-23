import React from "react";
import todos from "./todoData";
class TodoItem extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 1,
      text: "My Task",
      completed: true
    };
  }
  handleChange = () => {
    this.setState(
      (prevState) => {
        return { completed: !prevState.completed };
      },
      () => {
        console.log(todos);
      }
    );
  };
  render() {
    return (
      <>
        {todos.map((items) => {
          return (
            <div className="todo-item">
              <input
                type="checkbox"
                checked={items.completed}
                onChange={this.handleChange}
              />
              <label> {items.text} </label>
            </div>
          );
        })}
      </>
    );
  }
}

export default TodoItem;
