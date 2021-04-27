import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FadingComponent } from './fading/fading.component';
import { PositionElementsComponent } from './position-elements/position-elements.component';
import { CardsComponent } from './cards/cards.component';
import { MapFullComponent } from './map-full/map-full.component';

@NgModule({
  declarations: [
    AppComponent,
    FadingComponent,
    PositionElementsComponent,
    CardsComponent,
    MapFullComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyArNjkrGDxz3DQCUrHRXxYN5GEcw0nIzNk'    
   })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
