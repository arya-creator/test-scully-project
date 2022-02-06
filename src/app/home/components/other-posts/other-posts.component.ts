import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-posts',
  templateUrl: './other-posts.component.html',
  styleUrls: ['./other-posts.component.scss']
})
export class OtherPostsComponent implements OnInit {
@Input() otherPost:any;
  constructor() { }

  ngOnInit(): void {
  }

}
