import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LoggerService } from "../../.../../../../core/services/application/logger.service";
import { Observable } from "rxjs/";
import { PagedData, Page } from "../../../../shared/models/page";

@Component({
  selector: "app-system-log",
  templateUrl: "./system-log.component.html",
  styleUrls: ["./system-log.component.css"]
})
export class SystemLogComponent implements OnInit {
  public rows: Array<any[]>;
  page = new Page();
  loadingIndicator: boolean = false;
  constructor(private log: LoggerService) {
    this.page.pageNumber = 0;
    this.page.size = 10;
  }
  ngOnInit() {
    this.bindLog();
  }
  bindLog() {
    this.loadingIndicator = true;
    this.log.get().subscribe(
      data => {
        this.rows = data;
        this.loadingIndicator = false;
      },
      err => {
        console.log(err);
        this.loadingIndicator = false;
      }
    );
  }
}