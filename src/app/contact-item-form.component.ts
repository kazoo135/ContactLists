import {Component} from '@angular/core';


@Component({
  selector: 'contact-item-form',
  templateUrl: './partials/contact-item-form.component.html',
  styleUrls: ['./css/contact-item-form.component.css']
})

export class ContactItemFormComponent {
  onSubmit(contactItem: any) {
  console.log(contactItem);
  console.log('Name: ' + contactItem.name);
  }

}
