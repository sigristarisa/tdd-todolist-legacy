const TodoList = require("../src/TodoList.js");

describe("TodoList", () => {
  let todoList;

  beforeEach(() => {
    todoList = new TodoList();
  });

  it("creates a todo item", () => {
    // set up
    const expected = {
      id: 1,
      text: "turn the heating on!",
      status: "incomplete",
    };

    // execute
    const result = todoList.create("turn the heating on!");

    // verify
    expect(result).toEqual(expected);
  });

  it("returns all items", () => {
    // set up
    const item1 = {
      id: 1,
      text: "turn the heating on!",
      status: "incomplete",
    };
    const item2 = {
      id: 2,
      text: "Do the washing up",
      status: "incomplete",
    };
    const expected = [item1, item2];

    // execute
    todoList.create("turn the heating on!");
    todoList.create("Do the washing up");

    // verify
    expect(todoList.showAll()).toEqual(expected);
  });

  // --- EXERCISE TESTS --- //
  it("returns a single item even it's longer than 20 chars", () => {
    // set up
    const item1 = {
      id: 1,
      text: "making a doctor's appointment",
      status: "incomplete",
    };

    const expected = [item1];

    // execute
    todoList.create("making a doctor's appointment");

    // verify
    expect(todoList.showAll()).toEqual(expected);
  });

  it("returns a mutiple items with modified 20 chars", () => {
    // set up
    const item1 = {
      id: 1,
      text: "making a doctor's appointment",
      status: "incomplete",
    };

    const item2 = {
      id: 2,
      text: "clean celler",
      status: "incomlete",
    };

    const expected = [
      {
        id: 1,
        text: "making a doctor's ap...",
        status: "incomplete",
      },
      {
        id: 2,
        text: "clean celler",
        status: "incomplete",
      },
    ];

    // execute
    todoList.create("making a doctor's appointment");
    todoList.create("clean celler");

    // verify
    expect(todoList.showAll()).toEqual(expected);
  });

  it("sets item to be complete if found", () => {
    // set up
    const item1 = todoList.create("turn the heating on!");
    const expected = {
      id: 1,
      text: "turn the heating on!",
      status: "complete",
    };

    // execute
    const result = todoList.setComplete(item1.id);

    // verify
    expect(result).toEqual(expected);
  });

  it("throws error if not found", () => {
    // set up

    // execute, verify
    expect(() => todoList.setComplete(1)).toThrowError("Item not found");
  });

  it("gets incomplete items", () => {
    // set up
    const item1 = todoList.create("turn the heating on!");
    const item2 = todoList.create("Do the washing up");
    todoList.setComplete(item1.id);
    const expected = [item2];

    // execute
    const result = todoList.getByStatus("incomplete");

    // verify
    expect(result).toEqual(expected);
  });

  it("gets complete items", () => {
    // set up
    const item1 = todoList.create("turn the heating on!");
    const item2 = todoList.create("Do the washing up");
    todoList.setComplete(item1.id);
    const expected = [item1];

    // execute
    const result = todoList.getByStatus("complete");

    // verify
    expect(result).toEqual(expected);
  });

  it("finds item by id", () => {
    // set up
    const item1 = todoList.create("turn the heating on!");
    const expected = {
      id: 1,
      text: "turn the heating on!",
      status: "incomplete",
    };

    // execute
    const result = todoList.findBy(item1.id);

    // verify
    expect(result).toEqual(expected);
  });

  it("findBy throws error if not found", () => {
    // set up

    // execute, verify
    expect(() => todoList.findBy(1)).toThrowError("Item not found");
  });

  it("deletes item by id", () => {
    // set up
    const item1 = todoList.create("turn the heating on!");
    const expected = {
      id: 1,
      text: "turn the heating on!",
      status: "incomplete",
    };

    // execute
    const deletedItem = todoList.deleteBy(1);

    // verify
    expect(deletedItem).toEqual(expected);
    expect(todoList.showAll()).toEqual([]);
  });

  it("delete throws error if not found", () => {
    // set up

    // execute, verify
    expect(() => todoList.deleteBy(1)).toThrowError("Item not found");
  });

  fit("gets items by date", () => {
    // set up
    todoList.create("turn the heating on!");
    todoList.create("finish Bob's Bagel");

    const expected = [
      {
        id: 1,
        date: "2022-03-28",
        text: "turn the heating on!",
        status: "incomplete",
      },
      {
        id: 2,
        date: "2022-03-28",
        text: "finish Bob's Bagel",
        status: "incomplete",
      },
    ];
    // execute
    const result = todoList.getByDate("2022-03-28");
    // verify
    expect(result).toEqual(expected);
  });

  fit("gets items by date that you're looking for", () => {
    // set up

    todoList.items = [
      {
        id: 0,
        date: "2022-03-15",
        text: "go to massage",
        status: "incomplete",
      },
    ];

    todoList.create("turn the heating on!");
    todoList.create("finish Bob's Bagel");

    const expected = [
      {
        id: 1,
        date: "2022-03-28",
        text: "turn the heating on!",
        status: "incomplete",
      },
      {
        id: 2,
        date: "2022-03-28",
        text: "finish Bob's Bagel",
        status: "incomplete",
      },
    ];

    // execute
    const result = todoList.getByDate("2022-03-28");
    // verify
    expect(result).toEqual(expected);
  });

  fit("returns empty array", () => {
    // set up
    todoList.create("turn the heating on!");
    todoList.create("finish Bob's Bagel");

    const expected = [];
    // execute
    const result = todoList.getByDate("2022-04-01");
    // verify
    expect(result).toEqual(expected);
  });
});
