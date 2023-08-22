import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ElementRef,
  Injectable,
  ViewChild,
  AfterViewInit
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgSelectModule, NgOption } from "@ng-select/ng-select";
import { SkillService } from "../../../core/services/application/skill.service";
import { UserService } from "../../../core/services/application/user.service";
import { User } from "../../../shared/models/user";
import { Message } from "../../../shared/models/message";
import { LocalStorageService } from "../../../core/services/helpers/local-storage.service";
import { MessageService } from "../../../core/services/application/message.service";
import { LoggerService } from "../../../core/services/application/logger.service";
@Component({
  selector: "app-mail-compose",
  templateUrl: "./mail-compose.component.html",
  styleUrls: ["./mail-compose.component.css"]
})
export class MailComposeComponent implements OnInit {
  private user: User;
  submitted = false;
  mailsTo: any;
  mailToIds: any[];
  @ViewChild("editor") editor;
  mailComposeForm: FormGroup;

  get f() {
    return this.mailComposeForm.controls;
  }

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private localStorage: LocalStorageService,
    private messageService: MessageService,
    private log: LoggerService
  ) {}

  ngOnInit() {
    this.bindUserDetails();
    this.bindMailToList();
    this.bindFormGroup();
  }
  bindUserDetails() {
    this.user = JSON.parse(this.localStorage.getItem("userSession"));
  }
  bindFormGroup() {
    this.mailComposeForm = this.formBuilder.group({
      mailToIds: [null, Validators.required],
      subject: [null, Validators.required]
    });
  }
  ngAfterViewInit() {
    this.editor.setTheme("eclipse");
    this.editor.getEditor().setOptions({
      enableBasicAutocompletion: true
    });
    this.editor.getEditor().commands.addCommand({
      name: "showOtherCompletions",
      bindKey: "Ctrl-.",
      exec: function(editor) {}
    });
  }

  bindMailToList() {
    this.userService.getAll().subscribe(
      data => {
        this.bindUserMailOption(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  bindUserMailOption(users: User[]) {
    let To: NgOption[] = [];
    users.forEach(function(data) {
      var option: NgOption = {
        id: data.id,
        name: data.username
      };
      To.push(option);
    });
    this.mailsTo = To;
  }

  onSubmit() {
    let thisObject = this;
    this.submitted = true;
    if (this.mailComposeForm.invalid) {
      return;
    }
    this.f.mailToIds.value.forEach(function(id) {
      thisObject.SendMail(id, thisObject);
    });
  }

  SendMail(emailid: string, thisObject: any): void {
    this.userService.getAll().subscribe(
      data => {
        for (let i = 0; i < data.length; i++) {
          let user = data[i];
          if (user.username === emailid) {
            let message: Message = {
              id: 0,
              from: thisObject.user.username,
              fromName:
                thisObject.user.firstName + " " + thisObject.user.lastName,
              to: emailid,
              toName: user.firstName + "  " + user.lastName,
              subject: thisObject.f.subject.value,
              body: thisObject.editor.value,
              type:
                thisObject.user.username === "spammer@fakemail.com"
                  ? "Junk"
                  : "Starred",
              fromType:
                thisObject.user.username === "spammer@fakemail.com"
                  ? "Junk"
                  : "Starred",
              toType:
                thisObject.user.username === "spammer@fakemail.com"
                  ? "Junk"
                  : "Starred",
              fromTeam: thisObject.user.team,
              toTeam: user.team,
              time: new Date(),
              suggestion: "",
              imgSource: "https://github.com/Genuine-Identity.png",
              toStatus: "Active",
              fromStatus: "Active"
            };

            thisObject.messageService.register(message).subscribe(
              data => {
                console.log(data);
                this.log.Information(
                  `message send!! <br/>${JSON.stringify(message)}`
                );
              },
              error => {
                console.log(error);
                this.log.Error(`Error message send <br/>${error}`);
              }
            );
            break;
          }
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
