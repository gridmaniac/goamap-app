import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
import { ArticlePage } from './article';

@NgModule({
  declarations: [
    ArticlePage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ArticlePage),
  ],
}) 
export class ArticlePageModule {}
