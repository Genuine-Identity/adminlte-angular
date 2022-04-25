import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ElementRef,
  Injectable,
} from '@angular/core';
import { Observable, of ,} from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { MessageService } from '../../../core/services/application/message.service';
import { User } from '../../../shared/models/user';
import {
  PagedData,
  CorporateEmployee,
  Page,
} from '../../../shared/models/page';
import { Message } from '../../../shared/models/message';
import { LocalStorageService } from '../../../core/services/helpers/local-storage.service';
import {
  ActivatedRoute,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  NavigationCancel,
  Event,
  NavigationEnd,
  NavigationError,
  NavigationStart,
} from '@angular/router';
@Component({
  selector: 'app-mail-send-grid',
  templateUrl: './mail-send-grid.component.html',
  styleUrls: ['./mail-send-grid.component.css'],
})
export class MailSendGridComponent implements OnInit {
  private user: User;
  breadcrumb: any;
  editing = {};
  page = new Page();
  rows = new Array<Message>();
  reorderable: boolean = true;
  loadingIndicator: boolean = false;
  pageInfo: any;

  constructor(
    private messageService: MessageService,
    private localStorage: LocalStorageService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.page.pageNumber = 0;
    this.page.size = 10;
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.route),
        map((route) => {
          while (route.firstChild) route = route.firstChild;
          return route;
        })
      )
      .subscribe((event: any) => {
        this.breadcrumb = event.data._value;
      });
  }

  ngOnInit() {
    this.bindUserDetails();
    this.setPage({ offset: 0 });
  }
  bindUserDetails() {
    this.user = JSON.parse(this.localStorage.getItem('userSession'));
  }
  setPage(pageInfo) {
    this.loadingIndicator = true;
    this.pageInfo = pageInfo;
    this.page.pageNumber = pageInfo.offset;
    this.messageService
      .getFromMessages(this.page, this.user.username)
      .subscribe((pagedData) => {
        this.page = pagedData.page;
        this.rows = pagedData.data;
        this.loadingIndicator = false;
      });
  }
}
