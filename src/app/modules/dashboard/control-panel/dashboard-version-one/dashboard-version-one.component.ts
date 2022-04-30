import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AppSettings } from '../../../../core/services/application/app-settings.service';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';

import { Label } from "ng2-charts/la";
import { User } from '../../../../shared/models/user';
import { Message } from '../../../../shared/models/message';
import { LocalStorageService } from '../../../../core/services/helpers/local-storage.service';
import { MessageService } from '../../../../core/services/application/message.service';
import { _ } from 'lodash';

import {
  PagedData,
  CorporateEmployee,
  Page,
} from '../../../../shared/models/page';

@Component({
  selector: 'dashboard-version-one',
  templateUrl: './dashboard-version-one.component.html',
  styleUrls: ['./dashboard-version-one.component.css'],
})
export class DashbardVersionOneComponent implements OnInit {
  private user: User;
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartPlugins;
  public barChartLabels: any[];

  public barChartData: ChartDataset[] = [];

  public barChartLegend = true;
  public barChartType: any = 'bar';
  private sendMailRecords: any;
  private receivedMailRecords: any;

  page = new Page();
  rows = new Array<Message>();
  receivedPage = new Page();
  receivedRows = new Array<Message>();
  pageInfo: any;
  records: boolean;

  private records1: boolean;
  private records2: boolean;
  constructor(
    private messageService: MessageService,
    private localStorage: LocalStorageService
  ) {
    this.page.pageNumber = 0;
    this.page.size = 1000;
    this.receivedPage.pageNumber = 0;
    this.receivedPage.size = 1000;
    this.bindUserDetails();

    this.bindBarChartLabels();
    this.bindBarChartOptions();
  }
  getRecords(): boolean {
    return this.records1 && this.records2;
  }
  ngOnInit() {
    this.getSendMailsDetails({ offset: 0 });
    this.getReceivedMailsDetails({ offset: 0 });
  }
  bindUserDetails() {
    this.user = JSON.parse(this.localStorage.getItem('userSession'));
  }
  bindBarChartOptions() {
    this.barChartOptions = {
      responsive: true,
    };
  }

  bindBarChartLabels() {
    this.barChartLabels = [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
      '20',
      '21',
      '22',
      '23',
      '24',
    ];
  }
  getSendMailsDetails(pageInfo) {
    this.pageInfo = pageInfo;
    this.page.pageNumber = pageInfo.offset;
    this.messageService
      .getFromMessages(this.page, this.user.username)
      .subscribe((pagedData) => {
        this.page = pagedData.page;
        this.rows = pagedData.data;
        console.log('this.rows');
        console.log(this.rows);
        for (let i = 0; i < this.rows.length; i++) {
          this.rows[i].hour = new Date(this.rows[i].time).getHours() + 1;
        }
        this.sendMailRecords = _.countBy(this.rows, 'hour');
        for (let i = 0; i < 25; i++) {
          if (
            !(
              this.sendMailRecords[i] != null ||
              this.sendMailRecords[i] != undefined
            )
          ) {
            this.sendMailRecords[i] = 0;
          }
        }
        this.barChartData.push({
          data: _.values(this.sendMailRecords),
          label: 'Sent Mails',
        });
        this.records1 = true;
        console.log(this.sendMailRecords);
      });
  }

  getReceivedMailsDetails(pageInfo) {
    this.pageInfo = pageInfo;
    this.receivedPage.pageNumber = pageInfo.offset;
    this.messageService
      .getMessages(this.receivedPage, this.user.username, 'ALL')
      .subscribe((pagedData) => {
        console.log(pagedData);
        this.receivedPage = pagedData.page;
        this.receivedRows = pagedData.data;
        console.log('this.receivedRows');
        console.log(this.receivedRows);
        for (let i = 0; i < this.receivedRows.length; i++) {
          this.receivedRows[i].hour =
            new Date(this.receivedRows[i].time).getHours() + 1;
          console.log(new Date(this.receivedRows[i].time).getHours() + 1);
        }
        this.receivedMailRecords = _.countBy(this.receivedRows, 'hour');
        for (let i = 0; i < 25; i++) {
          if (
            !(
              this.receivedMailRecords[i] != null ||
              this.receivedMailRecords[i] != undefined
            )
          ) {
            this.receivedMailRecords[i] = 0;
          }
        }

        this.barChartData.push({
          data: _.values(this.receivedMailRecords),
          label: 'Received Mails',
        });
        this.records2 = true;
        console.log('Received Mails');
        console.log(this.receivedMailRecords);

        console.log(this.barChartData);
      });
  }
}
