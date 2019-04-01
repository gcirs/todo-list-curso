import { Type } from "./type";

export class Task {
  message: string;
  type: Type = Type.Incomplete;

  constructor(message: string, type: Type) {
    this.message = message;
    this.type = type;
  }

  isComplete = (): boolean => this.type === Type.Complete;
  markAsComplete = (): Type => (this.type = Type.Complete);
}
