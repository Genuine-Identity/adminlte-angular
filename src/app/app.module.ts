import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import 'jquery';
import 'bootstrap';
import 'chart.js';
import '@ng-bootstrap/ng-bootstrap';

import 'ionicons';
import 'lodash';
import 'rxjs';
import 'rxjs-compat';
import 'rxjs/BehaviorSubject';
import '../../src/assets/javascript/adminlte.ts';
import '../../src/assets/javascript/demo.ts';


import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app.routing.module';

import { NgSelectModule } from '@ng-select/ng-select';
import { AceEditorModule } from 'ng2-ace-editor';

import { AngularFireModule } from 'angularfire2';
import { environment } from './core/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    CoreModule,
    NgSelectModule,
    AceEditorModule,
    
    AngularFireModule.initializeApp(
      environment.firebaseConfig,
      'stackblitz-firebase-database'
    ),

    AngularFirestoreModule, // firestore
    // AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
  ],
  declarations: [AppComponent],
  providers: [{ provide: FirestoreSettingsToken, useValue: {} }],
  bootstrap: [AppComponent],
})
export class AppModule {}
