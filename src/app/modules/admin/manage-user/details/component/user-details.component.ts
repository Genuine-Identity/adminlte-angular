import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ElementRef,
  Injectable,
} from '@angular/core';
import { AppSettings } from '../../../../../core/services/application/app-settings.service';

import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import {
  PagedData,
  CorporateEmployee,
  Page,
} from '../../../../../shared/models/page';
// import { MockServerResultsService } from '../../../../core/services/application/mock-server-results.service.ts';
import { UserService } from '../../../../../core/services/application/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  page = new Page();
  rows: any = new Array<CorporateEmployee>();
  editing = {};

  columns = [];

  loadingIndicator: boolean = false;
  reorderable: boolean = true;
  constructor(private userService: UserService) {
    this.page.pageNumber = 0;
    this.page.size = 20;
  }

  ngOnInit() {
    this.setColumns();
    // this.setPage({ offset: 0 });
    this.setPageUsers({ offset: 0 });
  }
  setColumns() {
    this.columns = [
      { prop: 'username' },
      { name: 'password' },
      { name: 'firstName' },
      { name: 'lastName' },
    ];
  }

  /**
   * Populate the table with new data based on the page number
   * @param page The page to select
   */
  // setPage(pageInfo) {
  //   this.page.pageNumber = pageInfo.offset;
  //   this.serverResultsService.getResults(this.page).subscribe(pagedData => {
  //     console.log(pagedData.data)
  //     this.page = pagedData.page;
  //     this.rows = pagedData.data;
  //   });
  // }
  setPageUsers(pageInfo) {
    this.page.pageNumber = pageInfo.offset;
    this.userService.getResults(this.page).subscribe((pagedData) => {
      this.page = pagedData.page;
      this.rows = pagedData.data;
    });
  }
  // updateValue(event, cell, rowIndex) {
  //   console.log('inline editing rowIndex', rowIndex)
  //   this.editing[rowIndex + '-' + cell] = false;
  //   this.rows[rowIndex][cell] = event.target.value;
  //   this.rows = [...this.rows];
  //   console.log('UPDATED!', this.rows[rowIndex][cell]);
  // }
}
