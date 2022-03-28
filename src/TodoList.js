class TodoList {
  constructor() {
    this.id = 0;
    this.items = [];
  }

  create(str) {
    this.id++;

    const item = {
      id: this.id,
      date: this.today(),
      text: str,
      status: "incomplete",
    };
    this.items.push(item);
    return item;
  }

  showAll() {
    if (this.items.length === 1) return this.items;

    const modifiedItems = this.items.map((item) => {
      const itemText = item.text;
      const first20Chars = itemText.substring(0, 20);

      if (itemText.length <= 20) return item;
      return { ...item, text: `${first20Chars}...` };
    });

    return modifiedItems;
  }

  setComplete(id) {
    const item = this.findBy(id);
    item.status = "complete";
    return item;
  }

  getByStatus(status) {
    return this.items.filter((item) => item.status === status);
  }

  getByDate(date) {
    return this.items.filter((item) => item.date === date);
  }

  findBy(id) {
    const item = this.items.find((item) => item.id === id);
    if (item === undefined) throw new Error("Item not found");
    return item;
  }

  deleteBy(id) {
    const item = this.findBy(id);
    const index = this.items.indexOf(item);
    return this.items.splice(index, 1)[0];
  }

  today() {
    const date = new Date();
    const yyyy = date.getFullYear();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();

    if (mm < 10) mm = `0${mm}`;
    if (dd < 10) dd = `0${dd}`;

    return `${yyyy}-${mm}-${dd}`;
  }
}

module.exports = TodoList;
