import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import * as jQuery from "jquery";

import { User } from './shared/models/index';
import { UserService } from './core/services/application/user.service';
import { MessageService } from './core/services/application/message.service';
import { SkillService } from './core/services/application/skill.service';
import { NavigationCancel, Event, NavigationEnd, NavigationError, NavigationStart, Router, ActivatedRoute } from '@angular/router';
import { Message } from './shared/models/message';
import { LocalStorageService } from './core/services/helpers/local-storage.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private userService: UserService,
    private skillService: SkillService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private localStorage: LocalStorageService,) {
  }

  ngOnInit() {
    // this.localStorage.setItem('db.users', null);
    this.initFakeBackendDatabase();
  }

  private initFakeBackendDatabase(): void {
    this.initUserDatabase();
    this.initMessageDatabase();
  }

  private initUserDatabase(): void {
    let user = new User("intelchiprules@yahoo.co.in",
      "admin@123",
      "Girish",
      "Nandgawe",
      "B.E. Computers", [1, 2, 4, 6, 7, 8, 9, 10], 1);
    this.userService.register(user)
      .pipe(first())
      .subscribe(
        data => {
          // console.log(data);
        },
        error => {
          //console.log(error);
        });
  }
  private initMessageDatabase(): void {
    let message: Message = {
      id: 1,
      imgSource: "https://github.com/Genuine-Identity.png",
      team: "Support Team",
      time: "5 mins",
      suggestion: "Why not buy a new awesome theme?"
    };

    this.messageService.register(message)
      .pipe(first())
      .subscribe(
        data => {
          // console.log(data);
        },
        error => {
          // console.log(error);
        });
  }

  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      console.log("this._loadingBar.start();");
    }
    if (event instanceof NavigationEnd) {
      setTimeout(() => {
        console.log("this._loadingBar.complete();")
        console.log(this.route.snapshot.data)
      }, 500);
    }
    if (event instanceof NavigationCancel) {
      setTimeout(() => { /*Your Code*/ }, 500);
      console.log("this._loadingBar.stop();");

    }
    if (event instanceof NavigationError) {
      setTimeout(() => { /*Your Code*/ }, 500);
      console.log("this._loadingBar.stop();");
    }
  }
}