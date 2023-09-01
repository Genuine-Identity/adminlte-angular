import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { AdminLayoutComponent } from "./admin-layout.component";
import { AuthGuardService as AuthGuard } from "../../core/services/guards/auth-guard.service";

const routes: Routes = [
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () => import('../../modules/dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [AuthGuard]
      },
      {
        path: "dashboard",
        loadChildren: () => import('../../modules/dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [AuthGuard],
        data: {
          breadcrumb: "Dashboard",
          breadcrumbs: "Dashboard",
          title: "Dashboard Title",
          smallText: "Dashboard Small Text",
          isHome: true,
          icon: "fa fa-home",
          show: false
        }
      },
      {
        path: "admin",
        loadChildren: () => import('../../modules/admin/admin.module').then(m => m.AdminModule),
        canActivate: [AuthGuard],
        data: {
          breadcrumb: "Admin",
          breadcrumbs: "Admin",
          title: "Admin Title",
          smallText: "Admin Small Text",
          isHome: true,
          icon: "fa fa-home",
          show: false
        }
      },
      {
        path: "mail",
        loadChildren: () => import('../../modules/mail/mail.module').then(m => m.MailModule),
        canActivate: [AuthGuard],
        data: {
          breadcrumb: "Mail",
          breadcrumbs: "Mail",
          title: "Dashboard Title",
          smallText: "Dashboard Small Text",
          isHome: true,
          icon: "fa fa-home",
          show: false
        }
      },
      {
        path: "search",
        loadChildren: () => import('../../modules/search/search.module').then(m => m.SearchModule),
        canActivate: [AuthGuard],
        data: {
          breadcrumb: "Search",
          breadcrumbs: "Search",
          title: "Search Title",
          smallText: "Search Small Text",
          isHome: true,
          icon: "fa fa-home",
          show: false
        }
      },
      {
        path: "system",
        loadChildren: () => import('../../modules/system/system.module').then(m => m.SystemModule),

        canActivate: [AuthGuard],
        data: {
          breadcrumb: "System",
          breadcrumbs: "System",
          title: "System Title",
          smallText: "System Small Text",
          isHome: true,
          icon: "fa fa-home",
          show: false
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
