import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageNewsPageRoutingModule } from './page-news-routing.module';

import { PageNewsPage } from './page-news.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageNewsPageRoutingModule
  ],
  declarations: [PageNewsPage]
})
export class PageNewsPageModule {}
