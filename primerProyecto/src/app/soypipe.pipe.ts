import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'soypipe'
})
export class SoypipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
