var React = require('react');
var ReactDOM = require('react-dom');
var $ = require("jquery");
var expect = require("expect");
var TestUtils = require("react-addons-test-utils");

var TodoSearch = require("TodoSearch");

describe("TodoSearch", () => {
  it("should exist", () => {
    expect(TodoSearch).toExist();
  });
  it("should call onSearch with valid data", () => {

    var text = "Check email";
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch = {spy}/>);

    todoSearch.refs.searchText.value = text;

    TestUtils.Simulate.change(todoSearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith(false, text);

  });

  it("should call onSearch with proper checked value", () => {
    var isChecked = true;
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch = {spy}/>);

    todoSearch.refs.showCompleted.checked = isChecked;

    TestUtils.Simulate.change(todoSearch.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(true, '');
  });
});
