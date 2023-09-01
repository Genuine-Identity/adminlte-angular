import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../../core/services/application/auth.service";
import { LocalStorageService } from "../../../core/services/helpers/local-storage.service";
import { UserSessionService } from "../../../core/services/application/user-session.service";

import { MessageService } from "../../../core/services/application/message.service";
import { NotificationService } from "../../../core/services/application/notification.service";
import { TaskService } from "../../../core/services/application/task.service";

import { Message, Task, User } from "../../models/index";
import { LoggerService } from "../../../core/services/application/logger.service";
import { Notification } from '../../../shared/models/notification';


@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  public user: User;
  public tasks: Task[];
  public messages: Message[];
  public notifications: Notification[];

  constructor(
    private router: Router,
    private authService: AuthService,
    private messageService: MessageService,
    private localStorage: LocalStorageService,
    private notificationService: NotificationService,
    private taskService: TaskService,
    private userSessionService: UserSessionService,
    private log: LoggerService
  ) {}

  ngOnInit() {
    this.bindUserDetails();
    this.bindMessageMenu();
    this.bindNotificationMenu();
    this.bindTaskMenu();
  }
  bindUserDetails() {
    this.user = JSON.parse(this.localStorage.getItem("userSession"));
  }
  bindMessageMenu() {
    this.messages = this.messageService.getMessage();
  }

  bindNotificationMenu() {
    this.notifications=[];
    var x= this.notificationService.getNotification();
    this.notifications.concat(x);
  }
  bindTaskMenu() {
    this.tasks = this.taskService.getTask();
  }

  onSignOut() {
    this.log.Information(
      `User (${JSON.stringify(this.user.username)}) Logged Out!!`
    );
    this.localStorage.removeItem("userSession");
    this.localStorage.removeItem("users");
    this.localStorage.removeItem("currentUser");
    this.router.navigate(["/user/login"]);
  }
}
