/**
 * Created by Caruso on 6/8/2017.
 */
import { InjectionToken } from '@angular/core';

// initilize vars for tokens
let numDays = new Array(32);
let numYears = new Array(78);

for ( let  i = 1; i < 32; i++) {
  numDays[i] = i;
}

for ( let i = 0; i < 77; i++ ) {
  numYears[i] = i;
}

// create tokens
export const monthsList = {
  months: ['January', 'Feburary', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December']
};


export const daysList = {
  days: numDays
};

export const yearsList = {
  years: numYears
};


export const monthsListToken = new InjectionToken('monthsListToken');
export const daysListToken = new InjectionToken('daysListToken');
export const yearsListToken = new InjectionToken('yearsListToken');
