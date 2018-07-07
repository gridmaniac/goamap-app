import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArticleMarketsPage } from './article-markets';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ArticleMarketsPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ArticleMarketsPage),
  ],
})
export class ArticleMarketsPageModule {}
