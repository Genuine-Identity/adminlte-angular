import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import "jquery";
// import * as $ from 'jquery';
import { DashboardComponent } from './dashboard.component';
import { CardDetailsModule } from '../../shared/components/card-details/card-details.module';
import { DashbardControlPanelComponent } from './control-panel/pages/dashboard-control-panel.component';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { DashbardVersionOneComponent } from './control-panel/dashboard-version-one/dashboard-version-one.component';

import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    CardDetailsModule,
    ChartsModule,
  ],
  declarations: [
    DashboardComponent,
    DashbardControlPanelComponent,
    DashbardVersionOneComponent,
  ],
})
export class DashboardModule {}
