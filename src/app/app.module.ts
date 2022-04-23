import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HttpClientModule } from '@angular/common/http';

import { NgChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
// import { AppRoutingModule } from './app.routing.module';

import { NgSelectModule } from '@ng-select/ng-select';
// import { AceEditorModule } from 'ng2-ace-editor';

// import { environment } from './core/environment';
// import { AngularFireModule } from '@angular/fire/compat';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // AppRoutingModule,
    // NgxDatatableModule,
    // ReactiveFormsModule,
    CoreModule,
    // NgSelectModule,
    // AceEditorModule,
    NgChartsModule,
    // AngularFireModule.initializeApp(
    //   environment.firebaseConfig,
    //   'stackblitz-firebase-database'
    // ),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
