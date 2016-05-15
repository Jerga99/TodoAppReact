var React = require("react");
var uuid = require("node-uuid");

var TodoList = require("TodoList");
var AddTodo = require("AddTodo");
var TodoSearch = require("TodoSearch");

var TodoApp = React.createClass({

  getInitialState : function () {

    return {
      showCompleted : false,
      searchText : '',

      todos: [
        {
          id: uuid(),
          text: "Walk a dog"
        },
        {
          id: uuid(),
          text: "Clean the yard"
        },
        {
          id: uuid(),
          text: "Get a shit"
        },
        {
          id: uuid(),
          text: "Go to grandma"
        }
      ]
    };
  },

  handleAddTodo : function(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text
        }
      ]
    });
  },

  handleSearch: function(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },

  render: function() {
    var {todos} = this.state;
    return (
      <div className = "todo-app">
        <TodoSearch onSearch = {this.handleSearch} />
        <TodoList todos = {todos} />
        <AddTodo handleAddTodo = {this.handleAddTodo} />
      </div>
    );
  }
});

module.exports = TodoApp;
