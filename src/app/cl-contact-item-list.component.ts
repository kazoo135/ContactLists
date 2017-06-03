import { Component } from '@angular/core';

@Component({
  selector: 'cl-contact-item-list',
  templateUrl: './partials/cl-contact-item-list.component.html',
  styleUrls: ['./css/cl-contact-item-list.component.css']

})

export class ContactItemListComponent {
  contactItems = [
    {
      id: 1,
      firstname: 'Ben',
      lastname: 'Sargent',
      birthday: 'Jan 9 1967',
      relationship: 'friend',
      addr: {
        street: '23 Maple Road',
        city: 'Littleton',
        state: 'Colorado',
        zipcode: '10012'
      },
      phone: {
        home: '345-444-3333',
        mobile: '646-999-4321',
        work: '212-555-4323'
      },
      mail: {
        primary: 'bs@gmail.com',
        secondary: 'ben@work.org'
      }
    },
    {
      id: 2,
      firstname: 'Sal',
      lastname: 'Caruso',
      birthday: 'Oct. 18 1926',
      relationship: 'family',
      addr: {
        street: '23 faner Rd.',
        city: 'Wycoff',
        state: 'New Jersery',
        zipcode: '00012'
      },
      phone: {
        home: '345-444-3333',
        mobile: '646-999-4321',
        work: '212-555-4323'
      },
      mail: {
        primary: 'scatuso@gmail.com',
        secondary: 'sc@work.org'
      }
}];

  onContactItemDelete(contactItem: any) {
    console.log(contactItem);
  }

}
