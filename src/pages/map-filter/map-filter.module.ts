import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapFilterPage } from './map-filter';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    MapFilterPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(MapFilterPage),
  ],
})
export class MapFilterPageModule {}
