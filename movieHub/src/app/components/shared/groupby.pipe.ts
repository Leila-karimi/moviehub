import { Pipe, PipeTransform } from '@angular/core';
import { Actor } from '../../models/actor.model' 
@Pipe({name: 'groupBy'})
export class GroupByPipe implements PipeTransform {
  transform(value: Array<Actor>, field:string): Array<any> {
      console.log('field', field)
    if (value) {
      const groupedObj = value.reduce((prev, cur) =>{
          
        if(!prev[cur[field]]) {
          prev[cur[field]] = cur
        } else{
          prev[cur[field]].push(cur);
        }
        return prev;
      }, {});
      return Object.keys(groupedObj).map(key => ({ key:key, value: groupedObj[key] }));
    } else {
      return null;
    }
  }
}