import { Component } from '@angular/core';

@Component({
  selector: 'contact-item-list',
  templateUrl: './partials/contact-item-list.component.html',
  styleUrls: ['./css/contact-item-list.component.css']
})

export class ContactItemListComponent {
  contactItems = [
    {
      name: 'Christopher McLeod',
      address: {
        street: '225 West 57th street',
        city: 'New York',
        state: 'NY',
        zip: '10048'
      },
      phone: {
        home: '212-444-9878',
        mobile: '545-969-8888',
        work: '454-678-4325'
      },
      email: {
        primary: 'christopher@gmail.com',
        secondary: 'christopher@floweringtree.org'
      }
    },
    {
      name: 'Christine Crawely',
      address: {
        street: '22 Pine Road',
        city: 'Glen Rock',
        state: 'NJ',
        zip: '07343'
      },
      phone: {
        home: '',
        mobile: '',
        work: ''
      },
      email: {
        primary: '',
        secondary: ''
      }
    },
    {
      name: 'Peter Ruccione',
      address: {
        street: '11 Hillside Rd',
        city: 'Ringwood',
        state: 'NJ',
        zip: '048488'
      },
      phone: {
        home: '201-555-4343',
        mobile: '656-949-9393',
        work: ''
      },
      email: {
        primary: '',
        secondary: ''
      }


    }
  ];
}
