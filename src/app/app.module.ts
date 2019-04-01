import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { FirstComponent } from "./components/first/first.component";
import { MyModule } from "./my/my.module";
import { TaskComponent } from './components/task/task.component';
import { TaskListComponent } from './components/task-list/task-list.component';

@NgModule({
  declarations: [AppComponent, FirstComponent, TaskComponent, TaskListComponent],
  imports: [BrowserModule, FormsModule, MyModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
