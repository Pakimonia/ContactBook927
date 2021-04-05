import { Component, Input, OnInit } from '@angular/core';
import { EventModel } from 'src/app/models/event.model';
import { EventsService } from '../core/events.service';

@Component({
  selector: 'EventItem',
  templateUrl: './eventItem.component.html',
  styleUrls: ['./eventItem.component.css']
})
export class EventItemComponent implements OnInit {

  constructor(private eventsService: EventsService) { }
  @Input() myEvent: EventModel;

  //isPriority: boolean = false;
  //isHiden: boolean = false;

  ngOnInit() {
  }
  
  changePriority(): void {
    // this.myEvent.isPriority != this.myEvent.isPriority;
    this.eventsService.changeIsPriority(this.myEvent.id)
    // this.isPriority = !this.isPriority;
  }

  changeIsHidden(): void{
    this.eventsService.changeIsHidden(this.myEvent.id);
  } 

  addNote(){
      var note = prompt("Enter note text", "") ;
      if(note != null) {
        this.myEvent.addNote(note);
        console.log(note);
      }
  }
}
