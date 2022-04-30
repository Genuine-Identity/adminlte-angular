import { Injectable } from '@angular/core';
import { LocalStorageService } from '../../../core/services/helpers/local-storage.service';

// @Injectable()
export class UserSessionService {
  constructor(private localStorage: LocalStorageService) {}
  getUserSession(): any {
    return this.localStorage.getItem('userSession');
  }
  getUserName(): string {
    let user = this.getUserSession();
    return user == null || user == undefined
      ? 'System@fakemail.com'
      : JSON.parse(user).username;
  }
}
