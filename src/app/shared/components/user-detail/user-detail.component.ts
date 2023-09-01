import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ViewEncapsulation
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
import { UserService } from "../../../core/services/application/user.service";
import { User } from "../../../shared/models/user";
import { AlertType, Alert } from "../../models/all";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { AlertModule } from "../../widgets/alert/alert.module";
// import { NgSelectModule, NgOption } from "@ng-select/ng-select";
import { SkillService } from "../../../core/services/application/skill.service";

@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.css"]
})
export class UserDetailComponent implements OnInit {
  id: number;
  submitted = false;
  alert: Alert;
  user: User;
  userDetailsForm: FormGroup;
  skills: any[];
  skillIds: any[];
  loading: any;
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private skillService: SkillService
  ) { }

  ngOnInit() {
    this.bindDetails();
    this.bindSkills();
    this.bindFormGroup();
  }
  bindDetails() {
    this.route.params.subscribe(params => {
      if (params["id"]) {
        this.userService.getById(params["id"]).subscribe((user: User) => {
          console.log(user);
          this.user = user;
          this.userDetailsForm.patchValue(user);
        });
      }
    });
  }

  bindSkills() {
    this.skills = [];//= this.skillService.getAllSkill();
  }

  bindFormGroup() {
    this.userDetailsForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(6)]],
      education: ["", Validators.required],
      skillIds: [null, Validators.required]
    });
  }

  get f(): any {
    return this.userDetailsForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.userDetailsForm);
    if (this.userDetailsForm.invalid) {
      return;
    }

    let user = new User(
      this.user.username,
      this.f.password.value,
      this.f.firstName.value,
      this.f.lastName.value,
      this.f.education.value,
      this.f.skillIds.value,
      this.user.team,
      this.user.status,
      this.user.id
    );
    console.log(user);
    this.userService.update(user).subscribe(
      data => {
        this.alert = new Alert(
          AlertType.Success,
          "Success!",
          " User details updated Successfully!!"
        );
      },
      error => {
        this.alert = new Alert(
          AlertType.Error,
          "Failure!",
          `User details updation failure:-  ${error}`
        );
      }
    );
  }
}
