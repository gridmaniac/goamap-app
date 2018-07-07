import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArticleClimatePage } from './article-climate';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ArticleClimatePage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ArticleClimatePage),
  ],
})
export class ArticleClimatePageModule {}
