import { Component, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // links$: Observable<ScullyRoute[]> = this.scully.available$;
links$ : any;
  constructor(private scully: ScullyRoutesService) { }

  ngOnInit(): void {
    this.scully.available$
    .subscribe((links) => {
      console.log(links);
    });
  }
  }




