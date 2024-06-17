import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custome',
  standalone: true
})
export class CustomePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value !== null && value !== undefined && value !== '') {
      return value;
    } else{
      return 'N/A';
    }
  }

}
