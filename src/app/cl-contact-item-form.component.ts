import {Component} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'cl-contact-item-form',
  templateUrl: 'app/partials/cl-contact-item-form.component.html',
  styleUrls: ['app/css/cl-contact-item-form.component.css']
})

export class ContactItemFormComponent {
  months: any[];
  days: any;
  years: any;
  form: any;
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
// TODO write a function that initializes years property
// TODO write a function that initializes days propery
  ngOnInit() {
    this.months = [ 'January', 'Feburary', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'];
    // TODO eventually I want to figure out how to initialize days and years with loops
    this.days = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    this.years = ['2001', '2002', '2003', '2004', '2006'];

    // initialize form
    this.form = new FormGroup({
     fname: new FormControl('', Validators.compose([
       Validators.required,
       Validators.pattern('[A-z][a-z]+')])),
      lname: new FormControl('', Validators.compose([
        Validators.required, Validators.pattern('[A-Z][\'a-zA-Z]+')])),
      relationship: new FormControl('friend'),
      month: new FormControl(''),
      day: new FormControl(''),
      year: new FormControl(''),
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      hmPhone: new FormControl('', Validators.compose([
        Validators.required,
      Validators.pattern('[0-9]{3}-[0-9]{3}-[0-9]{4}')])),
      wkPhone: new FormControl('', Validators.pattern('[0-9]{3}-[0-9]{3}-[0-9]{4}')),
      email1: new FormControl(''),
      email2: new FormControl('')
    });
  } // End of ngOnInit()
  onSubmit(contactItem: any) {
    console.log(contactItem);
  }
} // End of ContactItemFormComponent class
