import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { UserDetailComponent } from './user-detail.component';
import { AlertModule } from '../../widgets/alert/alert.module';
// import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule,
    // NgSelectModule
  ],
  declarations: [UserDetailComponent],
  exports: [UserDetailComponent],
})
export class UserDetailModule {}
