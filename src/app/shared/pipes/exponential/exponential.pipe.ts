import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponential'
})
export class ExponentialPipe implements PipeTransform {

  transform(value: number): any {
    //Math.pow is a js function, function returns the 
    //base to the exponent power, as in base^exponen
    return Math.pow(value, 2);
  }

}
