import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { AlertComponent } from './alert.component'; 
import { AlertType } from '../../models/all'; 
@NgModule({
  imports: [
    CommonModule,   
  ],
  declarations: [
   AlertComponent,
  ],
  exports: [
    AlertComponent,
  ]
})
export class AlertModule { }