import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'readMore'
})
export class ReadMorePipe implements PipeTransform {

  transform(text: any, length: number = 20, showAll: boolean = false, suffix: string = '...'): any {
    if (showAll) {
      return text;
    }
    if ( text.split(" ").length > length ) {
      return text.split(" ").splice(0, length).join(" ") + suffix;
    }
    return text;
  }

}
