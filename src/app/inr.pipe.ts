import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inr'
})
export class InrPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return "₹"+value;
  }

}
