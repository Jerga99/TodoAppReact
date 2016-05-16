var React = require('react');
var ReactDOM = require('react-dom');
var $ = require("jquery");
var expect = require("expect");
var TestUtils = require("react-addons-test-utils");

var TodoApp = require("TodoApp");

describe("TodoApp", () => {
  it("should exist", () => {
    expect(TodoApp).toExist();
  });
  it("should create a new todo", () => {
    var text = "Some text";
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>); // Rendering todo

    todoApp.setState({todos: []});
    todoApp.handleAddTodo(text); // the state of app should update

    expect(todoApp.state.todos[0].text).toBe(text);
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });
  it("should toggle completed value when handleToggle is called", () => {
    var todoData = {
      id: 11,
      text: "test featrues",
      completed: false,
      createdAt: 0,
      completedAt: undefined
    }
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({todos: [todoData]});

    expect(todoApp.state.todos[0].completed).toBe(false);

    todoApp.handleToggle(11);

    expect(todoApp.state.todos[0].completed).toBe(true);
    expect(todoApp.state.todos[0].completedAt).toBeA('number');
  });
  it("should toggle undefined value when handleToggle is called from true to false", () => {
    var todoData = {
      id: 11,
      text: "test featrues",
      completed: false,
      createdAt: 0,
      completedAt: undefined
    }
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({todos: [todoData]});

    todoApp.handleToggle(11);
    todoApp.handleToggle(11);

    expect(todoApp.state.todos[0].completedAt).toBeA('undefined');
  });

});
