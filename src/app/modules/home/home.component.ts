import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {LoginService} from "../../services/login/login.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  public data: any;
  userName: any;
  user_role: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService:LoginService
  ) {}
  ngOnInit() {
    const user = this.loginService.userValue;
    this.user_role = user && user.roles && user.roles[0];
    console.log('this.user_role::'+this.user_role);
    this.route
      .data
      .subscribe(v => console.log(v));
    this.data = this.route.snapshot.data;

    const isLoggedIn = user && user.token;
    if (isLoggedIn) {
      this.userName = user.username;
    }
  }

  logout() {
    this.loginService.logout();
  }
}
