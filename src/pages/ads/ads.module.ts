import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdsPage } from './ads';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    AdsPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(AdsPage),
  ],
})
export class AdsPageModule {}
