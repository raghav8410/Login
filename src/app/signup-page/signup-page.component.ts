import { Component, OnInit, Input, ɵConsole } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { flatten } from '@angular/compiler';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  constructor(private router: Router, private _userService: UsersService) { }

  public user = {
    "email":"",
    "password":""
  }
  private registered = false;

  private users = [];
  private counter = 0;

  ngOnInit() {
    this.users = this._userService.getUsers();
  }

  Register(){
    if(this.user.email.length != 0 && this.user.password.length != 0){

      if(this.counter==0){
      this.counter++;
      }
      else{
        this.registered = false;
      }
      
      this.users.forEach(eachObj => {
        if(eachObj.email === this.user.email){
          this.registered = true;
          console.log("user already exists");
      }
      });
    }

    if(this.registered == false){
      this.router.navigate(['/success']);
      this._userService.addUsers(this.user);
      console.log(this._userService.getUsers());
    }

  }

}
