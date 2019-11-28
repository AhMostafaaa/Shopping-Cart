import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private us: AuthService, private router:Router) { }
   errorMessage:string = '';
  ngOnInit() {
  }
login(log){
  let data = log.value ;
  this.us.login(data.email ,data.password).then(() => {
    this.errorMessage ='';
    this.router.navigate(['/'])

  })
  .catch(err => {
    this.errorMessage = err.message
  })
}
}
