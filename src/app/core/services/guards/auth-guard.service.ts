import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../application/auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}
  canActivate(): boolean {
    console.log('a');
    if (!this.auth.isAuthenticated()) {
      console.log('AuthGuardService');
      this.router.navigate(['/user/login']);
      return false;
    }
    return true;
  }
}
