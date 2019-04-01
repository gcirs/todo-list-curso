import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-first",
  templateUrl: "./first.component.html",
  styleUrls: ["./first.component.css"]
})
export class FirstComponent implements OnInit {
  @Input() name: string;
  @Output() message: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  changeTitle() {
    this.message.emit(this.name);
  }
}
