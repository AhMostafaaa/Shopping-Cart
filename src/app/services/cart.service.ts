import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { Good } from '../interfaces/good.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private fs: AngularFirestore ,private as: AuthService) { }

addToCart(data: Good){
 return this.fs.collection(`users/${this.as.userId}/cart`).add(data)
}
getcart(){
  return this.fs.collection(`users/${this.as.userId}/cart`).snapshotChanges()
}
delete(id){
  this.fs.doc(`users/${this.as.userId}/cart/${id}`).delete();
}
save(id , amount) {
  this.fs.doc(`users/${this.as.userId}/cart/${id}`).update({amount});
}
}
