import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: '<cl-contact-item></cl-contact-item>',
  templateUrl: 'app/partials/cl-contact-item.component.html',
  styleUrls: ['app/css/cl-contact-item.component.css']
})

export class ContactItemComponent {
  @Input() contactItem: any;
@Output() delete = new EventEmitter();

onDelete() {
    console.log('Item Deleted');
  // this will return the contactItem when the delete button is clicked
    this.delete.emit(this.contactItem);
  }

}
