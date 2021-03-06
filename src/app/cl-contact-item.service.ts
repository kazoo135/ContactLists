/**
 * Created by Caruso on 6/8/2017.
 */
export class ContactItemService {

  contactItems = [
    {
      id: 1,
      firstname: 'Ben',
      lastname: 'Sargent',
      relationship: 'friend',
      birthday: {
        month: 'January',
        day: '9',
        year: '1967'
      },
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
      relationship: 'family',
      birthday: {
        month: 'October',
        day: '18',
        year: '1925'
      },
      addr: {
        street: '23 faner Rd.',
        city: 'Wycoff',
        state: 'New Jersery',
        zipcode: '10018'
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

  get() {
    return this.contactItems;
  }
  add(contactItem: any) {
    // TODO I need to construct the contactItems object out of the form values returned
    // then push it onto this contactItems array of objects.
    let newContact: any = {
      firstname: contactItem.fname,
      lastname: contactItem.lname,
      relationship: contactItem.relationship,
      birthday: {
        month: contactItem.month,
        day: contactItem.day,
        year: contactItem.year
      },
        addr: {
          street: contactItem.street,
          city: contactItem.city,
          state: contactItem.state,
          zipcode: contactItem.zipcode
        },
        phone: {
          home: contactItem.hmPhone,
          mobile: contactItem.mPhone,
          work: contactItem.wkPhone
        },
        mail: {
          primary: contactItem.primary,
          secondary: contactItem.secondary
        }
    };


    this.contactItems.push(newContact);
  }

  delete(contactItem: any) {
    let index = this.contactItems.indexOf(contactItem);
    if ( index >= 0) {
      this.contactItems.splice(index, 1);
    }
  }
}
