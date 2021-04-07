import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NotifierModule } from 'angular-notifier';


import { AppComponent } from './app.component';
import { EventItemComponent } from './Components/eventItem/eventItem.component';
import { ListEventsComponent } from './Components/listEvents/listEvents.component';
import { NavbarComponent } from './Components/Navbar/Navbar.component';
import { AddEventComponent } from './Components/AddEvent/AddEvent.component';
import { EventInfoComponent } from './Components/EventInfo/EventInfo.component';
import { Page404Component } from './Components/Page404/Page404.component';
import {  NgxSpinnerModule} from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    EventItemComponent,
    ListEventsComponent,
    NavbarComponent,
    AddEventComponent,
    EventInfoComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NotifierModule.withConfig({
      position: {
        horizontal: {
          position: 'right',
        },
        vertical: {
          position: 'top',
        }
      }
    }),
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
