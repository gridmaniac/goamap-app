import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewAdPage } from './new-ad';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [
    NewAdPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(NewAdPage),
  ],
})
export class NewAdPageModule {}
