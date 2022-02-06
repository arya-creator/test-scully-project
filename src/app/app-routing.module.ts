import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './home/components/article-list/article-list.component';

const routes: Routes = [
  // {
  //   path : '',
  //   loadChildren : ()=> import('./home/home.module').then((m)=>m.HomeModule)
  // },

  {
    path: '',
    loadChildren: () => import('./blog/blog.module').then((m) => m.BlogModule),
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
