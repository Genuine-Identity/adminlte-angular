import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { first } from "rxjs/operators";

import { AuthService } from "../../../../core/services/application/auth.service";
import { LoggerService } from "../../../../core/services/application/logger.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  submitted: boolean = false;
  loginForm: FormGroup;

  get f(): any {
    return this.loginForm.controls;
  }

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private log: LoggerService
  ) { }

  ngOnInit() {
    this.bindLoginFormGroup();
  }

  bindLoginFormGroup() {
    this.loginForm = this.formBuilder.group({
      email: [
        "intelchiprules@yahoo.co.in",
        [Validators.required, Validators.email]
      ],
      password: ["admin@123", [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    
    this.submitted = true;
    if (this.loginForm.invalid) {
     
      this.log.Information("loginForm.invalid");
      return;
    }
    this.authService
      .login(this.f.email.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
          this.log.Information(
            `Well Come!!! ${data.firstName} ${data.lastName} (${data.username})`
          );
          this.router.navigate(["/admin/user/add"]);
        },
        error => {
           console.log(error);
          this.log.Error(error);
        }
      );
  }
}
