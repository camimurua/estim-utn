import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isLoggedIn:boolean = false

  constructor(private rt: Router, private _authService:AuthService) {
  }

  ngOnInit(): void {
    this._authService.$isLoggedIn.subscribe((res:boolean) => {
      this.isLoggedIn = res
    })
  }

  toggleIsLoggedIn(){
    this._authService.toggleIsLoggedIn()
  }

}
