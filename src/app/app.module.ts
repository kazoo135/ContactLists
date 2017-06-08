import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent }  from './app.component';
import { ContactItemComponent } from './cl-contact-item.component';
import { ContactItemListComponent} from './cl-contact-item-list.component';
import { ContactItemFormComponent } from './cl-contact-item-form.component';
import { ContactItemService } from './cl-contact-item.service';
@NgModule({
  imports: [BrowserModule,
    ReactiveFormsModule],
  declarations: [AppComponent,
    ContactItemComponent,
  ContactItemListComponent,
  ContactItemFormComponent],
  providers: [ContactItemService],
  bootstrap: [AppComponent]
})


export class AppModule { }
