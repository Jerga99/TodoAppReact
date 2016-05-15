var React = require('react');
var ReactDOM = require('react-dom');
var $ = require("jquery");
var expect = require("expect");
var TestUtils = require("react-addons-test-utils");

var AddTodo = require("AddTodo");

describe("AddTodo", () => {
  it("should exist", () => {
    expect(AddTodo).toExist();
  });
  it("should call onAddTodo prop with valid", () => {
    var todoText = "Check mail";
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo handleAddTodo = {spy} />);
    var $el = $(ReactDOM.findDOMNode(addTodo)); // returns DOM component

    addTodo.refs.text.value = todoText;
    TestUtils.Simulate.submit($el.find("form")[0]) // we are pulling out first element from $el which is Form
    expect(spy).toHaveBeenCalledWith(todoText);
  });

  it("should not call onAddTodo prop with invalid", () => {
    var todoText = "";
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo handleAddTodo = {spy} />);
    var $el = $(ReactDOM.findDOMNode(addTodo)); // returns DOM component

    addTodo.refs.text.value = todoText;
    TestUtils.Simulate.submit($el.find("form")[0]) // we are pulling out first element from $el which is Form
    expect(spy).toNotHaveBeenCalled();
  });

});
