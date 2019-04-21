import { Pipe, PipeTransform } from '@angular/core';
//import { forEach } from '@angular/router/src/utils/collection';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  arr = []
  transform(value: any, args?: any): any {

    /**
     * value = {
     *    id:1,
     *    FullName:'Gopal'
     *
     *   }
     *
     * [{key:id,value:1}
     * {key:FullName,value:'Gopal'}]
     *
     *
    */
    for(var key in value){
      this.arr.push({'key':key,'value':value[key]});
    }
    return this.arr;
  }

}
