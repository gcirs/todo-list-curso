import { Task } from "./task";

export class List {
  list: Task[];

  constructor() {
    this.list = [];
  }

  showElementFromList = (index?: number): void => {
    if (index) {
      index--;
      console.log(`${this.list[index].message} is ${this.list[index].type}`);
    } else {
      this.list.map(task => console.log(`${task.message} is ${task.type}`));
    }
  };

  addTask = (task: Task): Task[] => (this.list = [...this.list, task]);

  removeTask = (task: Task): void => {
    const index = this.list.indexOf(task);
    if (index > -1) {
      this.list.splice(index, 1);
    }
  };
}
