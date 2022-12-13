import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
})
export class NotFoundComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}
  backToHome() {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['dashboard/home']);
    } else {
      this.router.navigate(['login']);
    }
  }
}
