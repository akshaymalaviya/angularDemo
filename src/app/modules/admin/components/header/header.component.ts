import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserNameService } from 'src/app/services/user-name.service';
import { AuthService } from './../../../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  userName: string = 'user01';
  constructor(private _userService: UserNameService) {
    this._userService.userName.subscribe(
      (message) => (this.userName = message)
    );
  }

  ngOnInit(): void {}
}
