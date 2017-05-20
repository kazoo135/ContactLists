import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ContactItemComponent } from './contact-item.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ContactItemComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
