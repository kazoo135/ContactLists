import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'contact-item',
  templateUrl: './partials/contact-item.component.html',
  styleUrls: ['./css/contact-item.component.css']
})

export class ContactItemComponent {
  @Input() contactItem: any;
  @Output() delete = new EventEmitter();

onDelete() {
  console.log( 'Contact Removed');
  this.delete.emit(this.contactItem);
}
}
