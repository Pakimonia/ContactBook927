import { Component, Input, OnInit } from '@angular/core';
import { EventModel } from 'src/app/models/event.model';
import { EventsService } from '../core/events.service';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'EventItem',
  templateUrl: './eventItem.component.html',
  styleUrls: ['./eventItem.component.css']
})
export class EventItemComponent implements OnInit {

  constructor(private eventsService: EventsService,private spinner: NgxSpinnerService, private notifier: NotifierService) { }
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
      this.spinner.show();
      var note = prompt("Enter note text", "") ;
      if(note != null && note != "") {
        this.myEvent.addNote(note);
        console.log(note);
        setTimeout(() => {
          this.spinner.hide();
          this.notifier.notify('success', 'Success add new note!');
        }, 2000);
      }
      else {        
        setTimeout(() => {
          this.spinner.hide();
          this.notifier.notify('error', 'Enter field!');
        }, 2000);
      }
  }
}
