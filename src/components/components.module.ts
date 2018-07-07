import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IonicPageModule } from 'ionic-angular'
import { CustomHeaderComponent } from './custom-header/custom-header'
import { WeatherWidgetComponent } from './weather-widget/weather-widget';
import { DonateWidgetComponent } from './donate-widget/donate-widget';
import { PlaceCardComponent } from './place-card/place-card';
import { ContentDrawerComponent } from './content-drawer/content-drawer';
import { PlaceInfoComponent } from './place-info/place-info';
import { AdItemComponent } from './ad-item/ad-item';
import { AccountCardComponent } from './account-card/account-card';

@NgModule({
	declarations: [
    CustomHeaderComponent,
    WeatherWidgetComponent,
    DonateWidgetComponent,
    PlaceCardComponent,
    ContentDrawerComponent,
    PlaceInfoComponent,
    AdItemComponent,
    AccountCardComponent,
  ],
  imports: [
    CommonModule,
    IonicPageModule.forChild(CustomHeaderComponent),
    IonicPageModule.forChild(DonateWidgetComponent),
    IonicPageModule.forChild(PlaceInfoComponent),
    IonicPageModule.forChild(AdItemComponent),
    IonicPageModule.forChild(AccountCardComponent),
  ],
	exports: [
    CustomHeaderComponent,
    WeatherWidgetComponent,
    DonateWidgetComponent,
    PlaceCardComponent,
    ContentDrawerComponent,
    PlaceInfoComponent,
    AdItemComponent,
    AccountCardComponent,
  ]
})
export class ComponentsModule {}