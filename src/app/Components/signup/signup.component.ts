import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  errorMessage:string = '' 
  constructor( private as: AuthService , private us: UserService, private router:Router) { }

  ngOnInit() {
  }
signUp(form) {
  let data:User = form.value 
  this.as.signUp(data.email , data.password)
  .then(result => {
    this.errorMessage = ""
    this.us.addNewUser(result.user.uid , data.name , data.address).then(() => {
     this.router.navigate(['/'])
    })
  })
  .catch(err => {
    this.errorMessage = err.message
  })
}
}
