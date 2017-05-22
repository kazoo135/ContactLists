import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './partials/app.component.html',
  styleUrls: ['./css/app.component.css']
})
export class AppComponent  {

 firstContact = {
    name: 'Salvatore Caruso',
    address: {
      street: '325 Fanning Rd.',
      city: 'Wycoff',
      state: 'NJ',
      zip: '07656'
    },
    phone: {
      home: '201-444-9878',
      mobile: '545-969-8888',
      work: '454-678-4325'
    },
   email: {
      primary: 'scatuso@yahoo.com',
     secondary: 'scaruso@example.com'
   }
  };
  onContactItemDelete(contactItem: any) {
  }
}
