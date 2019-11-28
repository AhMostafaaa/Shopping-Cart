import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shop'
})
export class ShopPipe implements PipeTransform {

  transform(goods:any , term:string) 
  {
    return goods.filter(function(goods){
      return goods.name.includes(term)
    })
  }

}
