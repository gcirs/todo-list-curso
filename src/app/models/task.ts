import { Type } from "./type";

export class Task {
  message: string;
  description: string;
  urgent: boolean;
  type: Type = Type.Incomplete;

  constructor(
    message: string,
    type: Type,
    description?: string,
    urgent: boolean = false
  ) {
    this.message = message;
    this.type = type;
    this.description = description;
    this.urgent = urgent;
  }

  isComplete = (): boolean => this.type === Type.Complete;
  markAsComplete = (): Type => (this.type = Type.Complete);
}
