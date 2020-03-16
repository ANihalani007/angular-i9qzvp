import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { EventsAppComponent } from './events-app.component';
import { MediaItemComponent } from './media-item/media-item.component';




@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ EventsAppComponent, MediaItemComponent ],
  bootstrap:    [ EventsAppComponent ]
})
export class AppModule { }
