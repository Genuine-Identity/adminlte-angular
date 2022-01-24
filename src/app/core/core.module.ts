import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthService } from './services/application/auth.service';
import { AuthGuardService } from './services/guards/auth-guard.service';
import { UserSessionService } from './services/application/user-session.service';
import { LocalStorageService } from './services/helpers/local-storage.service';

import { TaskService } from './services/application/task.service';
import { UserService } from './services/application/user.service';
import { SkillService } from './services/application/skill.service';
import { MessageService } from './services/application/message.service';
import { AppSettings } from './services/application/app-settings.service';
import { NotificationService } from './services/application/notification.service';

/*
 * fake backend service: interceptors... Starts here
 */
import { ErrorInterceptorProvider } from './services/helpers/error-interceptor.service';
import { FakeBackendInterceptorProvider } from './services/helpers/fake-backend-interceptor.service';
import { JsonWebTokenInterceptorProvider } from './services/helpers/json-web-token-interceptor.service';
/**
 * fake backend service: interceptors... ends here
 */
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';
import { SearchService } from './services/application/search.service';
import { LoggerService } from './services/application/logger.service';
import { AngularFirestoreModule } from '@angular/fire/firestore';
@NgModule({
  providers: [
    AppSettings,
    AuthService,
    UserService,
    SkillService,
    TaskService,
    MessageService,
    NotificationService,
    SearchService,
    LoggerService,

    AuthGuardService,
    UserSessionService,
    LocalStorageService,

    // order of interceptor's execution is important --> Girish Nandgawe:
    JsonWebTokenInterceptorProvider,
    ErrorInterceptorProvider,
    FakeBackendInterceptorProvider,
    AngularFirestoreModule, // firestore
  ],
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
