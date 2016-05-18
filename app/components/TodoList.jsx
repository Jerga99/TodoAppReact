var React = require("react");
var Todo = require("Todo");
var {connect} = require('react-redux');
var TodoList = React.createClass({

  render: function() {
    var {todos} = this.props;
    var renderTodos = () => {
      if(todos.length === 0) {
        return (
          <p className="container__message">Nothing To Do</p>
        );
      };
       return todos.map((todo) => {
        return <Todo {...todo} key = {todo.id} />
      });
    };

      return (
        <div>
          {renderTodos()}
        </div>
      );
  }
});

module.export = connect( // this allows us acces state and return concrete prop of state, and use it as props in this component
  (state) => {
    return {
      todos: state.todos
    };
  }
)(TodoList);
