import {Component} from '@angular/core';

@Component({
  selector: 'cl-contact-item-form',
  templateUrl: 'app/partials/cl-contact-item-form.component.html',
  styleUrls: ['app/css/cl-contact-item-form.component.css']
})

export class ContactItemFormComponent {
  months: any[];
  days: any;
  years: any;
  states = [{
    name: 'Alabama',
    abbr: 'AL'
  },
    {
      name: 'Alaska',
      abbr: 'AK'
    },
    {
      name: 'Arizona',
      abbr: 'AZ'
    },
    {
      name: 'Arkansas',
      abbr: 'AR'
    },
    {
      name: 'California',
      abbr: 'CA'
    }];

  initDays() {
    for ( let i = 1; i < 32; i++) {
      this.days[i] = i;
    }
  }

  initYears() {
    for ( let i = 2000; i < 2018; i++) {
      this.years[i] = i;
    }
    console.log(this.years);
  }
  ngOnInit() {
    this.months = [ 'January', 'Feburary', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'];
    // TODO eventually I want to figure out how to initialize days and years with loops
    this.days = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    this.years = ['2001', '2002', '2003', '2004', '2006'];
    // this.initDays();
    // this.initYears();
  }
} // End of ContactItemFormComponent class
