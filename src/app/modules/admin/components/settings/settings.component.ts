import { UserNameService } from './../../../../services/user-name.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  userName: any;
  constructor(
    private _userService: UserNameService,
    private auth: AuthService,
    private router: Router
  ) {
    this._userService.userName.subscribe((message) => {
      this.userName = message;
      console.log('LL', message);
    });
  }

  ngOnInit(): void {
    //console.log(this._userService.getValue().subscribe());
  }

  updateUsername(uname: any) {
    this._userService.userName.next(uname.value);
    localStorage.setItem('demoUser', uname.value);
    uname.value = '';
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['login']);
  }
}
