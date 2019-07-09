import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/core/models/user';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  isLoading = false;
  users: User[];
  @Output() selected: EventEmitter<User> = new EventEmitter();

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.loadUsers();
  }

  async loadUsers() {
    try {
      this.isLoading = true;
      this.users = await this.userService.getUsers().toPromise();
      console.log('users', this.users);
    } catch (e) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }

  selectUser(user: User) {
    this.selected.emit(user);
  }

}
