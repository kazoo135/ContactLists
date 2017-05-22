import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'contact-item-form',
  templateUrl: './partials/contact-item-form.component.html',
  styleUrls: ['./css/contact-item-form.component.css']
})

export class ContactItemFormComponent {
  form: any;
  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.compose([Validators.required])),
      relationship: new FormControl('family'),
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      'home-phone': new FormControl(''),
      'work-phone': new FormControl(''),
      'mobile-phone': new FormControl(''),
      'primary-email': new FormControl(''),
      'secondary-email': new FormControl('')
    });
  }
  onSubmit(contactItem: any) {
  console.log(contactItem);
  console.log('Name: ' + contactItem.name);
  }

}
