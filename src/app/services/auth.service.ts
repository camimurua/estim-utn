import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  $isLoggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn = false



  toggleIsLoggedIn(){
    this.isLoggedIn = !this.isLoggedIn
    if(this.isLoggedIn) this.logIn()
    else this.logOut()
  }

  logIn(){
    this.$isLoggedIn.next(true)
  }

  logOut(){
    this.$isLoggedIn.next(false)
  }

}
