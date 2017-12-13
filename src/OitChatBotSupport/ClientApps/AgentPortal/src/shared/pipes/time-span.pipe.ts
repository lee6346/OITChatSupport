import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'timeSpan'
})
export class TimeSpanPipe implements PipeTransform {
    transform(givenDate: string): number {
        let date = Date.parse(givenDate);
        if (isNaN(date))
            throw Error('invalid date format');
        return Math.abs(Date.now() - date); 
    } 
}