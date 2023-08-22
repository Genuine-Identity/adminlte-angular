import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuardService as AuthGuard } from "../../core/services/guards/auth-guard.service";

import { SystemComponent } from "./system.component";
import { SystemLogComponent } from "./system-log/component/system-log.component";

const routes: Routes = [
  {
    path: "",
    component: SystemComponent,
    children: [
      {
        path: "",
        component: SystemComponent,
        canActivate: [AuthGuard],
        data: {
          breadcrumb: "search",
          breadcrumbs: "search",
          title: "search",
          smallText: "search",
          isHome: true,
          icon: "fa fa-home",
          show: false
        },
        children: [
          {
            path: "",
            redirectTo: "log"
          },
          {
            path: "log",
            component: SystemLogComponent,
            canActivate: [AuthGuard],
            data: {
              title: "Log",
              smallText: "Log small text",
              isHome: true,
              icon: "fa fa-home",
              show: false
            }
          }
        ]
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule {}
