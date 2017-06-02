import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent }  from './app.component';

import { ContactItemComponent } from './cl-contact-item.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, ContactItemComponent],
})


export class AppModule { }
