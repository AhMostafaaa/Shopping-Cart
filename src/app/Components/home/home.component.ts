import { Component, OnInit, OnDestroy } from '@angular/core';
import { Good } from 'src/app/interfaces/good.interface';
import { GoodsService } from 'src/app/services/goods.service';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , OnDestroy {
 
  
  term:string =""
  goods:Array <Good> = [] ;
  goodObservable:Subscription

  add:number = -1;
  constructor(private gs: GoodsService , private cs: CartService , private as:AuthService , private router:Router) { }

  ngOnInit() {
   this.goodObservable= this.gs.getAllGoods().subscribe(data => {
     this.goods = data.map(element => {
        return {
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        }
      })
    })
  }
  ngOnDestroy(){
   this.goodObservable.unsubscribe();
  }
addToCart(index:number){
 if(this.as.userId) {
  this.add = +index;
  } else this.router.navigate(['/login'])
}
buy(amount:number){
  let selectedData = this.goods[this.add]
  let data = {
    name:selectedData.name,
    amount: +amount,
    price:selectedData.price
  }
  this.cs.addToCart(data).then(() => this.add = -1)
}
}
