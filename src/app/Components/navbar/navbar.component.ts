import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

 IsOpen:boolean = false 
 isUser:boolean = false;
 isAdmin:boolean = false;
  constructor(private os: AuthService , private router:Router , private us: UserService) { }

  ngOnInit() {
    this.os.user.subscribe(user => {
    if(user) {
      this.isUser = true;
      this.os.userId = user.uid
      this.us.getUserData().subscribe(data => {
        if(data["admin"]) {
          this.isAdmin = true
        }
      })
    }
    else {
      this.isUser = false ;
      this.os.userId = ''
    }
    })
}
toggleNav(){
  this.IsOpen = !this.IsOpen
}
logout(){
  this.os.logout().then(()=> {
    this.router.navigate(['/'])
  })
}
}
