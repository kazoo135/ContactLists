import {Component} from '@angular/core';
import { Validators, FormBuilder} from '@angular/forms';
import { ContactItemService } from './contact-item.service';


@Component({
  selector: 'contact-item-form',
  templateUrl: './partials/contact-item-form.component.html',
  styleUrls: ['./css/contact-item-form.component.css']
})

export class ContactItemFormComponent {
  form: any;
  constructor(private formBuilder: FormBuilder, private contactItemServ: ContactItemService) {}
  ngOnInit() {
    this.form = this.formBuilder.group({
      name: this.formBuilder.control('', Validators.compose([Validators.required])),
      relationship: this.formBuilder.control('family'),
      street: this.formBuilder.control(''),
      city: this.formBuilder.control(''),
      state: this.formBuilder.control(''),
      'home-phone': this.formBuilder.control(''),
      'work-phone': this.formBuilder.control(''),
      'mobile-phone': this.formBuilder.control(''),
      'primary-email': this.formBuilder.control(''),
      'secondary-email': this.formBuilder.control('')
    });
  }
  onSubmit(contactItem: any) {
  console.log(contactItem);
  this.contactItemServ.add(contactItem);
  }

}
