import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { NavigationCancel, Event, NavigationEnd, NavigationError, NavigationStart, Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.css'],
   encapsulation: ViewEncapsulation.None
})
export class ContentHeaderComponent implements OnInit {
  breadcrumb: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .map(() => this.route)
      .map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .subscribe((event) => {
        this.breadcrumb = event.data._value;
      });
  }
  ngOnInit() {

  }

}
