import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortScore'
})
export class ShortScorePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}k`;
    } else {
      return value;
    }
  }

}
