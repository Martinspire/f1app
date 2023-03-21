import { Injectable } from '@angular/core';
import { closestIndexTo, closestTo, differenceInSeconds, format, intervalToDuration, isAfter, isBefore, isDate, isFuture, isPast, isToday, isTomorrow, isYesterday, parse, parseISO } from 'date-fns';

/**
 * Helpers for DateFNS so we don't need to bother about formats in our code
 * can even make it dynamically in the future if we want to support more locations
 */
@Injectable({
  providedIn: 'root'
})
export class DateService {

  parseDate(dateString: string | undefined): Date {
    if (dateString) {
      return parse(dateString, 'yyyy-MM-dd', 0);
    } else {
      console.log('error parsing', dateString);
      return new Date();
    }
  }
  parseDateTime(isoDateTimeString: string | undefined): Date {
    if (isoDateTimeString) {
      return parseISO(isoDateTimeString);
    }
    console.log('error parsing', isoDateTimeString);
    return new Date();
  }
  parseDateAndTime(dateString: string | undefined, timeString: string | undefined): Date {
    return parseISO(dateString + 'T' + timeString);
  }

  isFutureDate(date: Date): boolean {
    return isFuture(date);
  }
  isFutureDateString(dateString: string | undefined): boolean {
    return isFuture(this.parseDate(dateString));
  }
  isFutureDateTimeString(dateTimeString: string | undefined): boolean {
    return isFuture(this.parseDateTime(dateTimeString));
  }
  isFutureDateAndTimeString(dateString: string | undefined, timeString: string | undefined): boolean {
    return isFuture(this.parseDateAndTime(dateString, timeString));
  }

  isPastDate(date: Date | undefined): boolean {
    if (date) {
      return isPast(date);
    }
    return false;
  }
  isPastDateString(dateString: string | undefined): boolean {
    return isPast(this.parseDate(dateString));
  }
  isPastDateTimeString(dateTimeString: string | undefined): boolean {
    return isPast(this.parseDateTime(dateTimeString));
  }
  isPastDateAndTimeString(dateString: string | undefined, timeString: string | undefined): boolean {
    return isPast(this.parseDateAndTime(dateString, timeString));
  }

  isAfterDate(date: Date | undefined, dateToCompare: Date | undefined): boolean {
    if (date && dateToCompare) {
      return isAfter(date, dateToCompare);
    }
    return false;
  }
  isAfterDateString(dateString: string | undefined, dateToCompare: string | undefined): boolean {
    return isAfter(this.parseDate(dateString), this.parseDate(dateToCompare));
  }
  isAfterDateTimeString(dateTimeString: string | undefined, dateTimeStringToCompare: string | undefined): boolean {
    return isAfter(this.parseDateTime(dateTimeString), this.parseDateTime(dateTimeStringToCompare));
  }
  isAfterDateAndTimeString(dateString: string | undefined, timeString: string | undefined, dateStringToCompare: string | undefined, timeStringToCompare: string | undefined): boolean {
    return isAfter(this.parseDateAndTime(dateString, timeString), this.parseDateAndTime(dateStringToCompare, timeStringToCompare));
  }

  isBeforeDate(date: Date | undefined, dateToCompare: Date | undefined): boolean {
    if (date && dateToCompare) {
      return isBefore(date, dateToCompare);
    }
    return false;
  }
  isBeforeDateString(dateString: string | undefined, dateToCompare: string | undefined): boolean {
    return isBefore(this.parseDate(dateString), this.parseDate(dateToCompare));
  }
  isBeforeDateTimeString(dateTimeString: string | undefined, dateTimeStringToCompare: string | undefined): boolean {
    return isBefore(this.parseDateTime(dateTimeString), this.parseDateTime(dateTimeStringToCompare));
  }
  isBeforeDateAndTimeString(dateString: string | undefined, timeString: string | undefined, dateStringToCompare: string | undefined, timeStringToCompare: string | undefined): boolean {
    return isBefore(this.parseDateAndTime(dateString, timeString), this.parseDateAndTime(dateStringToCompare, timeStringToCompare));
  }

  isDate(date: unknown): boolean {
    return isDate(date);
  }

  isClosestToDate(date: Date | undefined, dateArray: Date[]): Date | undefined {
    if (date) {
      return closestTo(date, dateArray);
    }
    return;
  }
  isClosestIndex(date: Date | number, dateArray: Date[]): number | undefined {
    if (date && dateArray.length > 0) {
      return closestIndexTo(date, dateArray);
    }
    return;
  }
  isClosestIndexOfDateStrings(date: Date, dateStringsArray: string[]): number | undefined {
    if (date && dateStringsArray.length > 0) {
      const dateArray: Date[] = [];
      dateStringsArray.forEach(dateString => {
        dateArray.push(this.parseDate(dateString));
      });
      return closestIndexTo(date, dateArray);
    }
    return;
  }

  isToday(date: Date | undefined): boolean {
    if (date) {
      return isToday(date);
    }
    return false;
  }
  isTomorrow(date: Date | undefined): boolean {
    if (date) {
      return isTomorrow(date);
    }
    return false;
  }

  isYesterday(date: Date | undefined): boolean {
    if (date) {
      return isYesterday(date);
    }
    return false;
  }

  formatDateRegular(date: Date): string {
    return format(date, 'dd-MM-yyyy');
  }
  formatDateReverse(date: Date): string {
    return format(date, 'yyyy-MM-dd');
  }
  formatDateShort(date: Date): string {
    return format(date, 'dd-MM');
  }
  formatDateTime(date: Date): string {
    return format(date, 'dd-MM-yyyy hh:mm');
  }
  formatDateTimeSeconds(date: Date): string {
    return format(date, 'dd-MM-yyyy hh:mm.ss');
  }
  formatLap(date: Date): string {
    return format(date, 'mm:ss.SSS');
  }

  intervalToDurationDate(date: Date | undefined, dateToCompare: Date | undefined): Duration {
    if (date && dateToCompare) {
      const interval = {
        start: date,
        end: dateToCompare
      }
      return intervalToDuration(interval);
    }
    return {};
  }
  intervalToDurationDateString(dateString: string | undefined, dateToCompare: string | undefined): Duration {
    return this.intervalToDurationDate(this.parseDate(dateString), this.parseDate(dateToCompare));
  }
  intervalToDurationDateTimeString(dateTimeString: string | undefined, dateTimeStringToCompare: string | undefined): Duration {
    return this.intervalToDurationDate(this.parseDateTime(dateTimeString), this.parseDateTime(dateTimeStringToCompare));
  }
  intervalToDurationDateAndTimeString(dateString: string | undefined, timeString: string | undefined, dateStringToCompare: string | undefined, timeStringToCompare: string | undefined): Duration {
    return this.intervalToDurationDate(this.parseDateAndTime(dateString, timeString), this.parseDateAndTime(dateStringToCompare, timeStringToCompare));
  }

  differenceInSecondsDate(date: Date | undefined, dateToCompare: Date | undefined): number {
    if (date && dateToCompare) {
      return differenceInSeconds(date, dateToCompare);
    }
    return 0;
  }
  differenceInSecondsDateString(dateString: string | undefined, dateToCompare: string | undefined): number {
    return this.differenceInSecondsDate(this.parseDate(dateString), this.parseDate(dateToCompare));
  }
  differenceInSecondsDateTimeString(dateTimeString: string | undefined, dateTimeStringToCompare: string | undefined): number {
    return this.differenceInSecondsDate(this.parseDateTime(dateTimeString), this.parseDateTime(dateTimeStringToCompare));
  }
  differenceInSecondsDateAndTimeString(dateString: string | undefined, timeString: string | undefined, dateStringToCompare: string | undefined, timeStringToCompare: string | undefined): number {
    return this.differenceInSecondsDate(this.parseDateAndTime(dateString, timeString), this.parseDateAndTime(dateStringToCompare, timeStringToCompare));
  }
}
