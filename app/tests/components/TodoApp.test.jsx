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
  });
});
