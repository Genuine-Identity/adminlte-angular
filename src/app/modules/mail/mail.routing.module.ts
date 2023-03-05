import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService as AuthGuard } from '../../core/services/guards/auth-guard.service';
import { MailComponent } from './mail.component';
import { InboxComponent } from './mail-box/inbox/component/inbox.component';
import { MailBoxRootComponent } from './mail-box/mail-box-root.component';
import { ReadMailComponent } from './mail-box/read/component/read-mail.component';
import { ComposeMailComponent } from './mail-box/compose/component/compose-mail.component';
import { JunkComponent } from './mail-box/junk/component/junk.component';
import { TrashComponent } from './mail-box/trash/component/trash.component';
import { SendComponent } from './mail-box/send/component/send.component';

const routes: Routes = [
  {
    path: '',
    component: MailComponent,
    children: [
      {
        path: '',
        component: MailBoxRootComponent,
        canActivate: [AuthGuard],
        data: {
          breadcrumb: 'inbox',
          breadcrumbs: 'inbox',
          title: 'inbox',
          smallText: '13 New Messages',
          isHome: true,
          icon: 'fa fa-home',
          show: false,
        },
        children: [
          {
            path: '',
            component: InboxComponent,
            canActivate: [AuthGuard],
            data: {
              title: 'Inbox',
              smallText: '13 New Messages',
              isHome: true,
              icon: 'fa fa-home',
              show: false,

              breadcrumb: 'Inbox ',
              breadcrumbs: 'Inbox ',
            },
          },
          {
            path: 'inbox',
            component: InboxComponent,
            canActivate: [AuthGuard],
            data: {
              title: 'Inbox',
              smallText: '13 New Messages',
              isHome: true,
              icon: 'fa fa-home',
              show: false,
              breadcrumb: 'Inbox ',
              breadcrumbs: 'Inbox ',
            },
          },
          {
            path: 'compose',
            component: ComposeMailComponent,
            canActivate: [AuthGuard],
            data: {
              breadcrumb: 'Compose ',
              breadcrumbs: 'Compose ',
              title: 'Compose  ',
              smallText: 'Compose   ',
              isHome: true,
              icon: 'fa fa-home',
              show: false,
            },
          },
          {
            path: 'junk',
            component: JunkComponent,
            canActivate: [AuthGuard],
            data: {
              breadcrumb: 'Junk',
              breadcrumbs: 'Junk',
              title: 'Junk',
              smallText: '13 New Messages',
              isHome: true,
              icon: 'fa fa-home',
              show: false,
            },
          },
          {
            path: 'sent',
            component: SendComponent,
            canActivate: [AuthGuard],
            data: {
              breadcrumb: 'Sent',
              breadcrumbs: 'Sent',
              title: 'Sent',
              smallText: 'Sent Messages',
              isHome: true,
              icon: 'fa fa-home',
              show: false,
            },
          },
          {
            path: 'trash',
            component: TrashComponent,
            canActivate: [AuthGuard],
            data: {
              breadcrumb: 'Trash',
              breadcrumbs: 'Trash',
              title: 'Trash',
              smallText: '13 New Messages',
              isHome: true,
              icon: 'fa fa-home',
              show: false,
            },
          },
          {
            path: 'trash',
            component: JunkComponent,
            canActivate: [AuthGuard],
            data: {
              breadcrumb: 'Junk',
              breadcrumbs: 'Junk',
              title: 'Junk',
              smallText: '13 New Messages',
              isHome: true,
              icon: 'fa fa-home',
              show: false,
            },
          },
          {
            path: 'read/s/:id',
            component: ReadMailComponent,
            canActivate: [AuthGuard],
            data: {
              breadcrumb: 'Sent Details',
              breadcrumbs: 'Sent Details',
              title: 'Sent Details Title',
              smallText: 'Sent Details Small Text',
              isHome: true,
              icon: 'fa fa-home',
              show: false,
              mode: 'sent',
            },
          },
          {
            path: 'read/i/:id',
            component: ReadMailComponent,
            canActivate: [AuthGuard],
            data: {
              breadcrumb: 'Inbox Details',
              breadcrumbs: 'Inbox Details',
              title: 'Inbox Details Title',
              smallText: 'Inbox Details Small Text',
              isHome: true,
              icon: 'fa fa-home',
              show: false,
              mode: 'inbox',
            },
          },
          {
            path: 'read/j/:id',
            component: ReadMailComponent,
            canActivate: [AuthGuard],
            data: {
              breadcrumb: 'Junk Details',
              breadcrumbs: 'Junk Details',
              title: 'Junk Details Title',
              smallText: 'Junk Details Small Text',
              isHome: true,
              icon: 'fa fa-home',
              show: false,
              mode: 'junk',
            },
          },
          {
            path: 'read/t/:id',
            component: ReadMailComponent,
            canActivate: [AuthGuard],
            data: {
              breadcrumb: 'Trash Details',
              breadcrumbs: 'Trash Details',
              title: 'Trash Details Title',
              smallText: 'Trash Details Small Text',
              isHome: true,
              icon: 'fa fa-home',
              show: false,
              mode: 'trash',
            },
          },
        ],
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MailRoutingModule {}
