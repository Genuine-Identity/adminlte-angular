import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core';
import { NgSelectModule, NgOption } from '@ng-select/ng-select';

// @Injectable()
export class SkillService {
  private skills: NgOption[] = [
    { id: 1, name: 'Asp.Net' },
    { id: 2, name: 'C#' },
    { id: 3, name: 'php' },
    { id: 4, name: 'SQL' },
    { id: 5, name: 'Python' },
    { id: 6, name: 'Angular 2+' },
    { id: 7, name: 'HTML' },
    { id: 8, name: 'CSS' },
    { id: 9, name: 'Javascript' },
    { id: 10, name: 'Jquery' },
    { id: 11, name: 'Oracle' },
    { id: 12, name: 'Java' },
    { id: 13, name: 'J2EE' },
    { id: 14, name: 'Nodejs' },
    { id: 15, name: 'Micro Services' },
  ];

  constructor() {}
  getAllSkill(): NgOption[] {
    return this.skills;
  }
  getUserSpecificSkills(): NgOption[] {
    return this.skills;
  }
}
