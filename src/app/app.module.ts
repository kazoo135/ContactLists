import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { ContactItemComponent } from './contact-item.component';
import  { ContactItemListComponent } from './contact-item-list.component';
import {ContactItemFormComponent} from  './contact-item-form.component';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule ],
  declarations: [ AppComponent,
    ContactItemComponent,
    ContactItemListComponent,
  ContactItemFormComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
