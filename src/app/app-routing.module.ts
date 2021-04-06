import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEventComponent } from './Components/AddEvent/AddEvent.component';
import { EventInfoComponent } from './Components/EventInfo/EventInfo.component';
import { ListEventsComponent } from './Components/listEvents/listEvents.component';
import { Page404Component } from './Components/Page404/Page404.component';

const routes: Routes = [
    { path:'home',component: ListEventsComponent, pathMatch:'full'},
    { path:'', redirectTo: 'home', pathMatch:'full'},
    { path:'add',component: AddEventComponent, pathMatch:'full'},
    { path:'product/:id', component: EventInfoComponent},
    { path:'**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }