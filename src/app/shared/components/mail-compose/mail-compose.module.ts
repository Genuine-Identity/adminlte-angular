import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailComposeComponent } from './mail-compose.component';
import { Routes, RouterModule } from '@angular/router';
import { AceEditorModule } from 'ng2-ace-editor';
import { NgSelectModule } from '@ng-select/ng-select';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AceEditorModule,
    NgSelectModule
  ],
  declarations: [
    MailComposeComponent,
  ],
  exports: [
    MailComposeComponent,
  ]
})
export class MailComposeModule { } 