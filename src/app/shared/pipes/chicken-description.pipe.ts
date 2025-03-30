import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'chickenDescription'
})
export class ChickenDescriptionPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/(кур(?:иц|ин|о)[а-я]*)/ig, (match: string) => match.toUpperCase());
  }

}
