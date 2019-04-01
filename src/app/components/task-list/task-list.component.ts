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
  taskDescription = "";
  isUrgent = false;

  constructor() {
    this.taskList = new List();
    const task = new Task(
      "Tarea de ejemplo",
      Type.Incomplete,
      "Desc de ejemplo"
    );
    this.taskList.addTask(task);
  }

  addTask() {
    const task = new Task(
      this.taskMessage,
      Type.Incomplete,
      this.taskDescription,
      this.isUrgent
    );
    this.taskList.addTask(task);
    this.taskMessage = "";
    this.taskDescription = "";
    this.isUrgent = false;
  }

  deleteTask(task: Task) {
    this.taskList.removeTask(task);
  }
}
