import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArticleInterestsPage } from './article-interests';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ArticleInterestsPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ArticleInterestsPage),
  ],
})
export class ArticleInterestsPageModule {}
