import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(itemsArr: any, fields?: string[], term?: string ): any {
    if (!term) {
      return itemsArr;
    }

    return itemsArr.filter(item => fields.some(field => item[field] && new RegExp(term, 'gi').test(item[field])  ));

  }

}
