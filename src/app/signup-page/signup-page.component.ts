import { Component, OnInit, Input, ɵConsole } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  name = new FormControl({
   firstName: new FormControl('', Validators.required)
  })

  constructor(private router: Router, private _userService: UsersService) { }

  public user = {
    "firstName":"",
    "lastName":"",
    "email":"",
    "password":""
  }

  private registered = false;
  private users = [];
  private count = 0;

  ngOnInit() {
    this.users = this._userService.getUsers();
  }

  Register(){

      this.users.forEach(eachObj => {
        if(eachObj.email === this.user.email){
          this.registered = true;
          alert("user already exists");
          window.location.reload();
      }
      });

    if(this.registered == false){
      this._userService.addUsers(this.user);
      console.log(this._userService.getUsers());
      alert("You have successfully registered \n Login to Continue.");
      this.router.navigate(['/login'])
      this.registered = false;
    }

  }

}
