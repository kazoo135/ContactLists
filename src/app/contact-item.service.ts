export class ContactItemService {


  contactItems: any[] = [
    {
      id: 1,
      name: 'Christopher McLeod',
      relation: 'friend',
      address: {
        street: '225 West 57th street',
        city: 'New York',
        state: 'NY',
        zip: '10048',

      },
      phone: {
        home: '212-444-9878',
        mobile: '545-969-8888',
        work: '454-678-4325'
      },
      email: {
        primary: 'christopher@gmail.com',
        secondary: 'christopher@floweringtree.org'
      },
    },
    {
      id: 2,
      name: 'Christine Crawely',
      relation: 'family',
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
      },
    },
    {
      id: 3,
      name: 'Peter Ruccione',
      relation: 'family',
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
      },
    }
  ];

  get() {
    console.log('get method from service');
    return this.contactItems;

  };
  add(contactItem: any) {
    this.contactItems.push(contactItem);
    console.log(this.contactItems);
  };
  delete(contactItem: any) {
    let index = this.contactItems.indexOf(contactItem);
    if (index >= 0) {
      this.contactItems.splice(index, 1);
    }
  };

}
