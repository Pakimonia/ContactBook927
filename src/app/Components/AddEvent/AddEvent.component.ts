import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventModel } from 'src/app/models/event.model';
import { EventsService } from '../core/events.service';

@Component({
  selector: 'AddEvent',
  templateUrl: './AddEvent.component.html',
  styleUrls: ['./AddEvent.component.css']
})
export class AddEventComponent implements OnInit {

  model = new EventModel();
  errorMessage = "";

 

  constructor(private eventServise: EventsService) { }

  onSubmit(form: NgForm) {
    if(this.model.isValid() == false)
    {
      this.errorMessage = "Error: pleace enter all fields";
    }
    else {
      this.eventServise.addEvent(this.model);
      this.errorMessage ="";
      form.resetForm();
    }
  }


  ngOnInit() {
  }

}
