import { Component, Input } from '@angular/core';

@Component({
  selector: 'contact-item',
  templateUrl: './partials/contact-item.component.html',
  styleUrls: ['./css/contact-item.component.css']
})

export class ContactItemComponent {
  @Input() contactItem: any;

onDelete() {
  console.log( 'Contact Removed');
}
}
