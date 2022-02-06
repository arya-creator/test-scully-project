import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { ArticleItemComponent } from '../home/components/article-list/article-item/article-item.component';
import { ArticleListComponent } from '../home/components/article-list/article-list.component';
import { OtherPostsComponent } from '../home/components/other-posts/other-posts.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';

@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [ArticleListComponent, ArticleItemComponent, BlogComponent, OtherPostsComponent],

  imports: [CommonModule, BlogRoutingModule, ScullyLibModule],
})
export class BlogModule {}
