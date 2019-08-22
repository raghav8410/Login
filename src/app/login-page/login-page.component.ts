import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  
  constructor(private router: Router, private _userService: UsersService) { }

  public user = {
    email: "",
    password: ""
  };

  private loggedIn = false;
  private successful = false;
  public users = [];

  ngOnInit() {
    this.users = this._userService.getUsers();
  }

  login(){
    this.users.forEach(eachObj => {
      if(eachObj.email === this.user.email){
        this.loggedIn = true;
          if(eachObj.password === this.user.password){
            this.successful = true;
            this.router.navigate(['/success']);
      }
    }
    });

    if(this.loggedIn == true && this.successful == false){
      console.log("wrong password");
    }

    if(!this.loggedIn){
      console.log("Register now");
    }

  }

}
