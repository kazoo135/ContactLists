import {Component, Inject} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactItemService } from './cl-contact-item.service';
import { monthsListToken, daysListToken, yearsListToken } from './cl-provider';

@Component({
  selector: 'cl-contact-item-form',
  templateUrl: 'app/partials/cl-contact-item-form.component.html',
  styleUrls: ['app/css/cl-contact-item-form.component.css']
})

export class ContactItemFormComponent {
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

  constructor( private contactItemService: ContactItemService,
  @Inject(monthsListToken) public monthsList: any,
  @Inject(daysListToken) public daysList: any,
  @Inject(yearsListToken) public yearsList: any ) {}
  ngOnInit() {
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
      zipcode: new FormControl('', Validators.pattern('[0-9]{5}')),
      hmPhone: new FormControl('', Validators.compose([
        Validators.required,
      Validators.pattern('[0-9]{3}-[0-9]{3}-[0-9]{4}')])),
      mPhone: new FormControl(''),
      wkPhone: new FormControl('', Validators.pattern('[0-9]{3}-[0-9]{3}-[0-9]{4}')),
      primary: new FormControl(''),
      secondary: new FormControl('')
    });
  } // End of ngOnInit()

  onSubmit(contactItem: any) {
    console.log(contactItem);
    this.contactItemService.add(contactItem);
  }
} // End of ContactItemFormComponent class
