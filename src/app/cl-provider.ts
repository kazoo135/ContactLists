import { InjectionToken } from '@angular/core';

export const monthsListToken = new InjectionToken('monthsListToken');
export const daysListToken = new InjectionToken('daysListToken');
export const yearsListToken = new InjectionToken('yearsListToken');

export const monthsList = {
  months: ['January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December']
};

export const daysList = {
  days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
};

export const yearsList = {
  years: ['2001', '2002', '2003', '2004', '2006']
};
