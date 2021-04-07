import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';
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

 

  constructor(private eventServise: EventsService,private spinner: NgxSpinnerService, private notifier: NotifierService) { }

  onSubmit(form: NgForm) {
    this.spinner.show();
    if(this.model.isValid() == false)
    {
      this.errorMessage = "Error: pleace enter all fields";
      setTimeout(() => {
        this.spinner.hide();
        this.notifier.notify('error', 'Enter all fields!');
      }, 5000);
    }
    else {
      this.eventServise.addEvent(this.model);
      this.errorMessage ="";
      setTimeout(() => {
        this.spinner.hide();
        this.notifier.notify('success', 'Success add new event!');
      }, 5000);
      form.resetForm();
      
    }
  }


  ngOnInit() {
  }

}
