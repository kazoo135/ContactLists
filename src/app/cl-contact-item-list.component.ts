import { Component } from '@angular/core';

@Component({
  selector: 'cl-contact-item-list',
  templateUrl: '/partials/cl-contact-item-list.html',
  styleUrls: ['/css/cl-contact-item-list.css']

})

export class ContactItemListComponent {
  contactItems = [
    {
      id: 1,
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
      },
    },
    {
      id: 2,
      firstname: 'Christopher',
      lastname: 'McLeod',
      relationship: 'friend',
      birthday: 'January 7, 1965',
      address: {
        home: {
          street: '225 West 57th street',
          city: 'New York',
          state: 'New York',
          zipcode: '10017'
        },
        work: {
          street: '',
          city: '',
          state: '',
          zipcode: '',
        },
      },
      phone: {
        home: '212-898-4544',
        mobile: '646-555-1212',
        work: ''
      },
      email: {
        primary: 'christopher@gmail.com',
        secondary: 'cmcleod@floweringtree.org'
      }
    },
    {
    id: 3,
    firstname: 'Salvatore',
    lastname: 'Caruso',
    relationship: 'family',
    birthday: 'October 18, 1926',
    address: {
      home: {
        street: '25 Faning Rd.',
        city: 'Wycoff',
        state: 'New Jersey',
        zipcode: '08348'
      },
      work: {
      },
    },
    phone: {
      home: '201-454-3838',
      mobile: 'none',
      work: 'none'
    },
    email: {
      primary: 'scatuso@yahoo.com',
      secondary: 'scaruso@gmail.com'
    }
}];

  onContactItemDelete(contactItem: any) {
    console.log(contactItem);
  }

}
