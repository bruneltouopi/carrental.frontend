import { Injectable } from '@angular/core';

@Injectable()
export class DateService {

  constructor() { }

  public parseISODate(iso: string): Date {
    return new Date(iso);
  }

  public getBeautifulDate(date: Date): string {
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  }

  public beautifyISODate(iso: string): string {
    return this.getBeautifulDate(this.parseISODate(iso));
  }

  public prepareForInput(date: Date): string {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  }
}
