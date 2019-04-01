import { Type } from "./type";

export class Task {
  message: string;
  description: string;
  type: Type = Type.Incomplete;

  constructor(message: string, type: Type, description?: string) {
    this.message = message;
    this.type = type;
    this.description = description;
  }

  isComplete = (): boolean => this.type === Type.Complete;
  markAsComplete = (): Type => (this.type = Type.Complete);
}
