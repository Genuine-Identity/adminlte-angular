import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashbardControlPanelComponent } from './control-panel/pages/dashboard-control-panel.component';
import { DashbardVersionOneComponent } from './control-panel/dashboard-version-one/dashboard-version-one.component';
import { AuthGuardService as AuthGuard } from '../../core/services/guards/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    // children: [
    //   {
    //     path: '', component: DashbardControlPanelComponent,
    //     canActivate: [AuthGuard],
    //     data: {
    //       breadcrumb: 'Dashboard',
    //       breadcrumbs: 'Dashboard',
    //       title: 'Dashboard Title',
    //       smallText: 'Dashboard Small Text',
    //       isHome: true,
    //       icon: 'fa fa-home',
    //       show: false
    //     },
    //   },  
    //    {
    //     path: 'version-one', component: DashbardVersionOneComponent,
    //     canActivate: [AuthGuard],
    //     data: {
    //       breadcrumb: 'Dashboard Version One',
    //       breadcrumbs: 'Dashboard Version One',
    //       title: 'Dashboard Version One Title',
    //       smallText: 'Dashboard Version One Small Text',
    //       isHome: true,
    //       icon: 'fa fa-home',
    //       show: false
    //     },
    //   },
    // ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule { }