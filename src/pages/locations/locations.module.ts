import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocationsPage } from './locations';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    LocationsPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(LocationsPage),
  ],
})
export class LocationsPageModule {}
