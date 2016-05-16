var expect = require("expect");

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  it("should exist", () => {
    expect(TodoAPI).toExist();
  });
  describe("setTodos", () => {
    beforeEach(() => {
      localStorage.removeItem('todos');
    }); //its called before each test
    it("should set valid todos array", () => {
      var todos = [{
        id: 10,
        text: "test todo",
        completed: false
      }];
      TodoAPI.setTodos(todos);
      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);
    });

    it("should not set invalid todos array", () => {
      var badTodos = { a: 'b' };
      TodoAPI.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);

    });
  });

  describe("getTodos", () => {
    it("should return empty array for bad localStorage data", () => {
      var actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual([]);
    });

    it("should return todos if valid array in local storage", () => {
      var todos = [{
        id: 10,
        text: "test todo",
        completed: false
      }];
      localStorage.setItem("todos", JSON.stringify(todos));

      var actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual(todos);
    });
  });
  describe("filter todos", () => {
    var todos = [{
      id: 1,
      text: "some text",
      completed: true
    },{
      id: 2,
      text: "other text",
      completed: false
    },{
      id: 3,
      text: "diffrent text",
      completed: true
    },
  ];
  it("should return all items if show completed is true", () => {
    var filteredTodos = TodoAPI.filterTodos(todos, true, '');
    expect(filteredTodos.length).toBe(3);
  });
  it("should return todo items if show completed is false", () => {
    var filteredTodos = TodoAPI.filterTodos(todos, false, '');
    expect(filteredTodos.length).toBe(1);
  });
  it("should sort by completed status", () => {
    var filteredTodos = TodoAPI.filterTodos(todos, true, '');
    expect(filteredTodos[0].completed).toBe(false);
  });
  it("should filter todos by search text", () => {
    var filteredTodos = TodoAPI.filterTodos(todos, true, 'some');
    expect(filteredTodos.length).toBe(1);
  });
  it("should return all todos if search text is empty", () => {
    var filteredTodos = TodoAPI.filterTodos(todos, true, '');
    expect(filteredTodos.length).toBe(3);
  });
  });
});
