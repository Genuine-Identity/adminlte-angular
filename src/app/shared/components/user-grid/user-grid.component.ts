import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ElementRef,
  Injectable
} from "@angular/core";
import { Observable, of } from "rxjs";
import { delay, map } from "rxjs/operators";
import { UserService } from "../../../core/services/application/user.service";
import { LoggerService } from "../../../core/services/application/logger.service";
import { User } from "../../../shared/models/user";
import {
  PagedData,
  CorporateEmployee,
  Page
} from "../../../shared/models/page";
@Component({
  selector: "app-user-grid",
  templateUrl: "./user-grid.component.html",
  styleUrls: ["./user-grid.component.css"]
})
export class UserGridComponent implements OnInit {
  editing = {};
  page = new Page();
  public rows = new Array<User>();
  reorderable: boolean = true;
  loadingIndicator: boolean = false;
  pageInfo: any;

  constructor(private userService: UserService, private log: LoggerService) {
    this.page.pageNumber = 0;
    this.page.size = 10;
  }

  ngOnInit() {
    this.setPage({ offset: 0 });
  }

  setPage(pageInfo) {
    this.loadingIndicator = true;
    this.pageInfo = pageInfo;
    this.page.pageNumber = pageInfo.offset;
    this.userService.getResults(this.page).subscribe(pagedData => {
      console.log(pagedData);
      this.page = pagedData.page;
      this.rows = pagedData.data;
      this.loadingIndicator = false;
      // this.pageInfo.count = this.pageInfo.count - 1;
      // this.pageInfo.offset = (this.pageInfo.count % this.pageInfo.pageSize === 0) ? this.pageInfo.offset - 1 :               this.pageInfo.offset;
    });
  }
  delete(id) {
    this.deleteUser(id);
  }
  deleteUser(id): void {
    if (id !== 1) {
      this.userService.delete(id).subscribe(
        data => {
          this.setPage({ offset: 0 });
          this.log.Information(`User deleted!!  <br/> Id - ${id}`);
        },
        error => {
          console.log(error);
          this.log.Error(`Delete user failure!!  <br/> Id - ${id}`);
        }
      );
    }
  }
}
