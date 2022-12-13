import { UserNameService } from './../../../../services/user-name.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  userName: string = 'user01';
  constructor(private _userService: UserNameService) {
    this._userService.userName.subscribe(
      (message) => (this.userName = message)
    );
  }

  ngOnInit(): void {}
  onSubmitForm(myForm: NgForm) {
    console.log(myForm.value);
    alert('your response has been submitted');
  }
}
