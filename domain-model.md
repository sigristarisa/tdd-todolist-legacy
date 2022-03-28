// Add your domain model below

| Objects  | Properties            | Messages             | Notes                                                           | Scenario            | Output                             | Example                                                                       |
| -------- | --------------------- | -------------------- | --------------------------------------------------------------- | ------------------- | ---------------------------------- | ----------------------------------------------------------------------------- |
| TodoList | id @Int, items @Array | create(@String)      | id increments, status starts off incomplete, adds item to array |                     | todo item                          | `create('hello') => {id: 1, text: "hello", status: "incomplete"}`             |
|          |                       | showAll()            |                                                                 |                     | all items                          | `showAll() => [{id: 1, text: "hello", status: "incomplete"}]`                 |
|          |                       | setComplete(@Int)    | finds item, then updates status property                        | item exists         | updated todo item                  | `setComplete(1) => {id: 1, text: "hello", status: "complete"}`                |
|          |                       |                      |                                                                 | item does not exist | thrown error                       | `setComplete(1) => thrown error "Item not Found"`                             |
|          |                       | getByStatus(@String) |                                                                 |                     | array, filtered by property status | `getByStatus("incomplete") => [{id: 1, text: "hello", status: "incomplete"}]` |
|          |                       | findBy(@Int)         |                                                                 | item exists         | item                               | `findBy(1) => {id: 1, text: "hello", status: "incomplete"}`                   |
|          |                       |                      |                                                                 | item does not exist | thrown error                       | `findBy(1) => thrown error "Item not Found"`                                  |
|          |                       | deleteBy(@Int)       | finds item, then removes it from array                          | item exists         | item                               | `deleteBy(@Int) => {id: 1, text: "hello", status: "incomplete"}`              |
|          |                       |                      |                                                                 | item does not exist | thrown error                       | `deleteBy(@Int) => thrown error "Item not Found"`                             |

–––

1. Show only the first 20chars when displaying all items

- When seeing all the items, only show the first 20 chars of the item text, followed by '...'
- However, when displaying single items, show the whole item text.

Noun: all the items, first 20 charsof the item text followed by '...'
verb: show

| Messages   | Scenario                                   | Output                     | Example                                                                                                                                                                   |
| ---------- | ------------------------------------------ | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| @showAll() | only single item                           | todo item with entire text | {id: 1, text: "making a doctor's appointment", status: "complete"}                                                                                                        |
|            | multiple items with todo less than 20chars | todo items array           | [{id: 1, text: "hello", status: "incomplete"}{id: 2, text: "hello", status: "incomplete"}{id: 3, text: "hello", status: "incomplete"}                                     |
|            | multiple items with todo more than 20chars | todo items array           | [{id: 1, text: "make a doctor's appo...", status: "incomplete"}{id: 2, text: "hello", status: "incomplete"}{id: 3, text: "buy easter decoratio...", status: "incomplete"} |

–--

2. To do items have dates when they were created.

- A user can search todo items by day and see a list of todo items by the day they were created.
- If there are no todos for that day, show an empty list

Noun: dates, search, todo items, day, empty list
Verb: search, create

| Messages            | Scenario                 | Output                     | Example                                                                                                                                                   |
| ------------------- | ------------------------ | -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| @create(@String)    |                          | todo item with entire text | {id: 1, date: "2022-03-28" text: "making a doctor's appointment", status: "incomplete"}                                                                   |
| @getByDate(@String) | when item(s) exist       | todo items array           | getByDate("2022-03-28") => [{id: 1, date: "2022-03-28 text: "hello", status: "incomplete"}{id: 2, date: "2022-03-28 text: "hello", status: "incomplete"}] |
|                     | when item does not exsit | empty list                 | getByDate("2022-04-01") => []                                                                                                                             |
