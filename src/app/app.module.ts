import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ContactItemComponent } from './contact-item.component';
import  { ContactItemListComponent } from './contact-item-list.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ContactItemComponent, ContactItemListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
