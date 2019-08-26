import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  private url="/assets/data/users.json";

  public registeredUser = [
    {"firstName": "","lastName": "","email": "abc@gmail.com", "password": "Raghav@1708"},
    {"firstName": "","lastName": "","email": "abc1@gmail.com", "password": "Raghav@1708"},
    {"firstName": "","lastName": "","email": "abc2@gmail.com", "password": "Raghav@1708"}
  ]

  getUsers(){
    return this.registeredUser;
  }

  addUsers(data){
    this.registeredUser.push(data);
  }
}
