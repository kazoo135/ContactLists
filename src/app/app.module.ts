import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent }  from './app.component';
import { ContactItemComponent } from './cl-contact-item.component';
import { ContactItemListComponent} from './cl-contact-item-list.component';
import { ContactItemFormComponent } from './cl-contact-item-form.component';
import { ContactItemService } from './cl-contact-item.service';
import { monthsListToken, monthsList } from './providers';
import { daysListToken, daysList } from './providers';
import { yearsListToken, yearsList } from './providers';

@NgModule({
  imports: [BrowserModule,
    ReactiveFormsModule],
  declarations: [AppComponent,
    ContactItemComponent,
  ContactItemListComponent,
  ContactItemFormComponent],
  providers: [ContactItemService,
    { provide: monthsListToken, useValue: monthsList },
    { provide: daysListToken, useValue: daysList },
    { provide: yearsListToken, useValue: yearsList}
    ],
  bootstrap: [AppComponent]
})


export class AppModule { }
