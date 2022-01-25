import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from '../../../../core/services/application/search.service';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.css'],
  providers: [SearchService],
})
export class SearchPanleComponent implements OnInit {
  private words: string;
  private subscriber: any;
  results: Object;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private searchService: SearchService
  ) {}
  ngOnInit() {
    this.subscriber = this.route.queryParams.subscribe((params) => {
      this.words = params['q'];
      this.searchService.searchRepositoriesByName(this.words).subscribe(
        (data: any) => {
          const { total_count: totalCount, items } = data;

          if (totalCount > 0) {
          } else {
            ('Not found. Please try again or use a different name is the search input above.');
          }
        },
        (err: any) => {
          console.log(err);
        }
      );
    });
  }
  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }
}
