import { Component, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';

import { Router } from '@angular/router';


@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent implements OnInit {
  articles: any[];
  links$: any = this.scully.available$;
  b : string

  constructor( private scully: ScullyRoutesService, private router:Router) { }
  ngOnInit() {
    this.links$.subscribe((links: any) => {
      this.articles = links.slice(1);
      this.articles.sort(this.compare);
      console.log(this.articles)
    });

  }
  compare(a, b) {
    if(a.tile_order < b.tile_order) {
      return -1;
    }
    return 0;
  }
}
