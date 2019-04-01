import { Component, Input } from "@angular/core";
import { List } from "src/app/models/list";
import { Task } from "src/app/models/task";
import { Type } from "src/app/models/type";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.css"]
})
export class TaskListComponent {
  taskList: List;
  taskMessage = "";

  constructor() {
    this.taskList = new List();
    const task = new Task("Tarea de ejemplo", Type.Incomplete);
    this.taskList.addTask(task);
  }

  addTask() {
    const task = new Task(this.taskMessage, Type.Incomplete);
    this.taskList.addTask(task);
    this.taskMessage = "";
  }

  deleteTask(task: Task) {
    this.taskList.removeTask(task);
  }
}
