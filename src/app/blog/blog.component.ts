import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router, ROUTES} from '@angular/router';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { SeoService } from '../services/seo.service';

// declare var ng: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated

})
export class BlogComponent implements OnInit {
  selectedPost : any;
posts$ : any;
onReading : boolean = false;
showOtherPosts : boolean = false;

currentPost: any;
  relatedPosts: any = [];
  relatedPostsRoutes: any;
  posts: ScullyRoute[];
blog$ : any;


  constructor(private scully : ScullyRoutesService, private router : Router, private seo : SeoService ) { }
  ngAfterContentInit(): void {
    // throw new Error('Method not implemented.');
  }
  ngOnInit() {
    this.blog$ = this.scully.getCurrent();
    console.log('blog$' , this.blog$)
    this.blog$.subscribe((b) => {
      console.log('seoTitle ',b.seoTitle);
      console.log('seoDesc ',b.seoDescription);
      console.log('seoLink  ',b.seoLink);
      console.log('seoKeywords ',b.seoKeywords);

      this.seo.updateTitle(b.seoTitle);
      this.seo.updateDescription(b.seoDescription);
      this.seo.updateKeywords(b.seoKeywords);
      // this.seo.updateLinkUrl(b.seoLink);
      // this.linkService.addTag( { rel: 'canonical', href: b.seoLink} );

    });

    this.scully.available$.subscribe((links) => {
      this.posts = links;
      // console.log('posts in ngoninit ', this.posts)
      ///

      this.currentPost = this.posts.filter((post) => {
        // console.log('router url ', this.router.url)
        return post.route === this.router.url;
      });
      // console.log('Current post ', this.currentPost);
    // console.log(
    //   'Related posts Routes ',
    //   this.currentPost[0].related_posts_routes
    // );
    this.relatedPostsRoutes = this.currentPost[0].related_posts_routes;

    this.posts.forEach((post)=>{
      console.log(post)
      this.relatedPostsRoutes.forEach((r : any)=>{
        // console.log('routes in relatedpostsroutes ', r)
        if (post.route === r){
          // console.log('post.route in if ', post.route);
          // console.log('r in if ', r)
          this.relatedPosts.push(post)
        }

      })

  });

  console.log('Related posts ' ,this.relatedPosts)
    });

this.showOtherPosts = true;

  }



}
