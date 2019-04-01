import { Component, Input, EventEmitter, Output } from "@angular/core";
import { Task } from "src/app/models/task";
import { Type } from "src/app/models/type";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.css"]
})
export class TaskComponent {
  @Input() task: Task;
  @Output() delete: EventEmitter<Task> = new EventEmitter<Task>();

  deleteTask(task: Task) {
    this.delete.emit(task);
  }

  complete(task: Task) {
    task.markAsComplete();
  }

  getBg() {
    return this.task.type === Type.Complete ? "darkseagreen" : "tomato";
  }
}
