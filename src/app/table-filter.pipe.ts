import { Pipe, PipeTransform } from '@angular/core';
import {Metrics} from './Metrics';

@Pipe({
  name: 'tableFilter'
})
export class TableFilterPipe implements PipeTransform {

  transform(list: Metrics[], value: string) {


    return value ? list.filter(item => item.category === value) : list;
  }

}
