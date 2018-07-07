import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavoritePage } from './favorite';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    FavoritePage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(FavoritePage),
  ],
})
export class FavoritePageModule {}