import { Component } from '@angular/core';
import { ContactItemService } from './cl-contact-item.service';
@Component({
  selector: 'cl-contact-item-list',
  templateUrl: './partials/cl-contact-item-list.component.html',
  styleUrls: ['./css/cl-contact-item-list.component.css']

})

export class ContactItemListComponent {
  contactItems: any;
  constructor( private contactItemService: ContactItemService) {}

  ngOnInit() {
    this.contactItems =  this.contactItemService.get();
  }

  onContactItemDelete(contactItem: any) {
    console.log(contactItem);
    this.contactItemService.delete(contactItem);
  }

}
