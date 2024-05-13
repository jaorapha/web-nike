import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNewsPage } from './page-news.page';

const routes: Routes = [
  {
    path: '',
    component: PageNewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageNewsPageRoutingModule {}
