import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserNameService {
  userName = new BehaviorSubject<any>('user01');
  currentMessage = this.userName.asObservable();

  constructor() {
    if (localStorage.getItem('demoUser') == null) {
      this.userName.next('user01');
      localStorage.setItem('demoUser', 'user01');
    } else {
      this.userName.next(localStorage.getItem('demoUser'));
    }
  }
}
