import { Component } from '@angular/core';


@Component({
  selector: '<cl-contact-item></cl-contact-item>',
  templateUrl: 'app/partials/cl-contact-item.component.html',
  styleUrls: ['app/css/cl-contact-item.component.css']
})

export class ContactItemComponent {

  contactItem = {
    firstname: 'Ben',
    lastname: 'Sargent',
    relationship: 'friend',
    birthday: 'January 9, 1955',
    address: {
      home: {
        street: '238 whitehall Rd',
        city: 'Denver',
        state: 'Colorado',
        zipcode: '100019'
      },
      work: {
        street: '838 Maple Drive',
        city: 'Denver',
        state: 'Colorado',
        zipcode: '100987',
      },
    },
    phone: {
        home: '393-899-1234',
        mobile: '837-999-7373',
        work: '837-182-8888'
      },
      email: {
        primary: 'bsargent@gmail.com',
        secondary: 'ben@example.com'
      }
  };

}
