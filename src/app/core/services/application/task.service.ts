import { Injectable } from '@angular/core';
import { Task } from '../../../shared/models/task';

@Injectable()
export class TaskService {
  constructor() { }

  public getTask(): Task[] {
    let task: Task[] = [
      {
        task: " Design some buttons",
        ngclass: "progress-bar progress-bar-aqua",
        percentage: "20%"
      },
      {
        task: " Create a nice theme",
        ngclass: "progress-bar progress-bar-green",
        percentage: "40%"
      },
      {
        task: " Some task I need to do",
        ngclass: "progress-bar progress-bar-aqua",
        percentage: "60%"
      },
      {
        task: " Make beautiful transitions",
        ngclass: "progress-bar progress-bar-yellow",
        percentage: "20%"
      },
    ];
    return task;
  }
}