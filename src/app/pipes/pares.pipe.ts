import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pairs'
})
export class PairsPipe implements PipeTransform {

  transform(value: any[]): any[] {
    const pairs = value.reduce((result, value, index, array) => {
      if ((index % 2) === 0) {
        result.push(array.slice(index, index + 2));
      }
      return result;
    }, []);
    console.log(pairs);
    return pairs;
  }
}
