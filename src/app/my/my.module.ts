import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MyComponent } from "./my/my.component";

@NgModule({
  declarations: [MyComponent],
  imports: [CommonModule],
  exports: [MyComponent]
})
export class MyModule {}
