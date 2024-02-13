import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat',
})
export class DateFormatPipe implements PipeTransform {
  transform(value: string | Date): string {
    let inputDate: Date;

    if (typeof value === 'string') {
      inputDate = new Date(value);
    } else if (value instanceof Date) {
      inputDate = value;
    } else {
      return '';
    }

    if (!inputDate || isNaN(inputDate.getTime())) {
      return '';
    }

    const currentDate = new Date();

    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    };

    if (this.isSameDay(inputDate, currentDate)) return 'Today';
    if (this.isYesterday(inputDate, currentDate)) return 'Yesterday';

    return inputDate.toLocaleDateString(undefined, options);
  }

  private isSameDay(date1: Date, date2: Date): boolean {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  }

  private isYesterday(date1: Date, date2: Date): boolean {
    const yesterday = new Date(date1);
    yesterday.setDate(yesterday.getDate() - 1);

    return (
      date2.getDate() === yesterday.getDate() &&
      date2.getMonth() === yesterday.getMonth() &&
      date2.getFullYear() === yesterday.getFullYear()
    );
  }
}
