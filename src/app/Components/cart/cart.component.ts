import { Component, OnInit } from '@angular/core';
import { shopping } from 'src/app/interfaces/shopping.interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cs:CartService) { }

  cart: shopping[] = []
  ngOnInit() {
    this.cs.getcart().subscribe(cart => {
      this.cart = cart.map(shopping =>{
        return {
          id: shopping.payload.doc.id,
          ...shopping.payload.doc.data()
        }
      })
    })
  }
  delete(index){
    this.cs.delete(this.cart[index].id)
  }
  save(index) {
    this.cs.save(this.cart[index].id ,this.cart[index].amount)
  }

}
