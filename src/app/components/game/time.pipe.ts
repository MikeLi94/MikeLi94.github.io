import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value.substring(0,3) === "00:"){
      return value.substring(3,9);
    }
    return value;
  }

}
