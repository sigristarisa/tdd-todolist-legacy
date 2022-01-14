# Test-Driven Development

## TodoList Legacy

### Learning Objectives
- Explain and use a process to extend simple legacy code
- Use the Red Green Refactor loop to develop code

### Quickstart
1. Fork this repository
2. Clone your fork to your local machine (example command below, see note)
3. Install project dependencies

```sh
$ git clone git@github.com:[username]/tdd-todoList-legacy.git && cd ]/tdd-todoList-legacy
$ npm ci # to install dependencies
```

### Instructions
1. Read the specs and domain model.
2. Read the source code.
3. Read and understand new requirements
4. Extend the domain model so it represents the new requirements
5. Follow a test-driven development process to implement them: write a test, and pass it by writing source code. Repeat until you've finished.

### Requirements

You should be able to run this in your JS console (using your node REPL, or browser console). For any assumptions made, represent this in your domain model.

```
1. Show only the first 20chars when displaying all items
- When seeing all the items, only show the first 20 chars of the item text, followed by '...'
- However, when displaying single items, show the whole item text.
```

```
2. To do items have dates when they were created.
- A user can search todo items by day and see a list of todo items by the day they were created.
- If there are no todos for that day, show an empty list
```
