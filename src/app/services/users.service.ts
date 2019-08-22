import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  private url="/assets/data/users.json";

  public registeredUser = [
    {"email": "abc@gmail.com", "password": "12345"},
    {"email": "xyz@gmail.com", "password": "12345"},
    {"email": "pqr@gmail.com", "password": "12345"}
  ]

  getUsers(){
    return this.registeredUser;
  }

  addUsers(data){
    this.registeredUser.push(data);
  }
}
