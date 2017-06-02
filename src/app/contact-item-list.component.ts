import { Component } from '@angular/core';
import { ContactItemService } from './contact-item.service';

@Component({
  selector: 'contact-item-list',
  templateUrl: './partials/contact-item-list.component.html',
  styleUrls: ['./css/contact-item-list.component.css']
})

export class ContactItemListComponent {
  contactItems: any;


  constructor( private  contactItemServ: ContactItemService) {}
  ngOnInit() {
    this.contactItems = this.contactItemServ.get();
  }

  onContactItemDelete(contactItem: any) {
    this.contactItemServ.delete(contactItem);
  }
}
