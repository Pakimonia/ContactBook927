import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventItemComponent } from './Components/eventItem/eventItem.component';
import { ListEventsComponent } from './Components/listEvents/listEvents.component';
import { NavbarComponent } from './Components/Navbar/Navbar.component';
import { AddEventComponent } from './Components/AddEvent/AddEvent.component';
import { EventInfoComponent } from './Components/EventInfo/EventInfo.component';

@NgModule({
  declarations: [
    AppComponent,
    EventItemComponent,
    ListEventsComponent,
    NavbarComponent,
    AddEventComponent,
    EventInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
