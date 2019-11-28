import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:Observable <firebase.User>
  userId:string = ''
  constructor(private fbAuth: AngularFireAuth) {
    this.user = fbAuth.user
    
   }

signUp(email,password){
 return this.fbAuth.auth.createUserWithEmailAndPassword(email,password)
}
login(email , password) {
  return this.fbAuth.auth.signInWithEmailAndPassword(email , password)
}
logout(){
  return this.fbAuth.auth.signOut()
}
}
