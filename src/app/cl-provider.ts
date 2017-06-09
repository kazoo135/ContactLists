import { InjectionToken } from '@angular/core';

export const monthsListToken = new InjectionToken('monthsListToken');
export const daysListToken = new InjectionToken('daysListToken');
export const yearsListToken = new InjectionToken('yearsListToken');

export const monthsList = {
  months: ['January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December']
};

const numDays = [];
for (let i = 0; i < 32; i++) {
  numDays.push(i);
}
export const daysList = {
  days: numDays
};

const numYears = [];
for ( let k = 1942; k < 2020; k++ ) {
  numYears.push(k);
}
export const yearsList = {
  years: numYears
};


