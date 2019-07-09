import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit, OnChanges {
  @Input() user: User;
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      name: [''],
      username: [''],
      street: [''],
      city: ['']
    });
  }

  ngOnChanges() {
    if (this.userForm && this.user) {
      this.userForm.patchValue({
        name: this.user.name,
        username: this.user.username,
        street: this.user.address.street,
        city: this.user.address.city
      });
    }
  }

}
