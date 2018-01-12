import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'club'
})
export class ClubPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
