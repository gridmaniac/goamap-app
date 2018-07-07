import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArticleDonationsPage } from './article-donations';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ArticleDonationsPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ArticleDonationsPage),
  ],
})
export class ArticleDonationsPageModule {}
