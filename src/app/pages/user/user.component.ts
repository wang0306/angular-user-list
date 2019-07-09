import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;

  constructor() { }

  ngOnInit() {
  }

  onSelect(user: User) {
    this.user = user;
  }

}
