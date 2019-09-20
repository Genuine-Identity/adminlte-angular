import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Message } from '../../../shared/models/message';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { first } from 'rxjs/operators';

import { User } from '../../../shared/models/index';
import { PagedData, CorporateEmployee, Page } from '../../../shared/models/page';

@Injectable()
export class MessageService {
  messages: Message[];
  constructor(private http: HttpClient) { }
  public register(message: Message) {
    return this.http.post(`/message/register`, message);
  }
  public getMessage(): Message[] {
    let message: Message[] = [
      {
        id: 1,
        imgSource: "https://github.com/Genuine-Identity.png",
        team: "Support Team",
        time: "5 mins",
        suggestion: "Why not buy a new awesome theme?"
      },
      {
        id: 2,
        imgSource: "https://github.com/Genuine-Identity.png",
        team: "Design Team",
        time: "2 hours",
        suggestion: "Why not buy a new awesome theme?"
      },
      {
        id: 3,
        imgSource: "https://github.com/Genuine-Identity.png",
        team: "Developers",
        time: "Today",
        suggestion: "Why not buy a new awesome theme?"
      },
      {
        id: 4,
        imgSource: "https://github.com/Genuine-Identity.png",
        team: "Sales Department",
        time: "1 hours",
        suggestion: "Why not buy a new awesome theme?"
      },
    ];
    return message;
  }
  getAll(): Observable<Message[]> {
    return Observable.of(this.getMessage());
  }
  public getResults(page: Page): Observable<PagedData<Message>> {
    return this.getAll().flatMap(data => {
      this.messages = data;
      return of(data).pipe(map(data => this.getPagedData(page)));
    })
  }

  /**
   * Package companyData into a PagedData object based on the selected Page
   * @param page The page data used to get the selected data from companyData
   * @returns {PagedData<User>} An array of the selected data and page
   */
  private getPagedData(page: Page): PagedData<Message> {
    const pagedData = new PagedData<Message>();
    page.totalElements = this.messages.length;
    page.totalPages = page.totalElements / page.size;
    const start = page.pageNumber * page.size;
    const end = Math.min((start + page.size), page.totalElements);
    for (let i = start; i < end; i++) {
      const jsonObj = this.messages[i];
      const message: Message = {
        id: jsonObj.id,
        imgSource: jsonObj.imgSource,
        team: jsonObj.team,
        time: jsonObj.time,
        suggestion: jsonObj.suggestion
      };
      pagedData.data.push(message);
    }
    pagedData.page = page;
    return pagedData;
  }
}