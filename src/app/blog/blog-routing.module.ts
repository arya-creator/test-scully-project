import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { ArticleListComponent } from '../home/components/article-list/article-list.component';

import {BlogComponent} from './blog.component';

const routes: Routes = [
  {path : '', component : ArticleListComponent},

  {
    path: ':slug',
    component: BlogComponent,

  },
  {
    path: '**',
    component: BlogComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}

