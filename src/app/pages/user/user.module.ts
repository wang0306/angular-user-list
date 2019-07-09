import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersModule } from 'src/app/common/components/users/users.module';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    UsersModule
  ],
  declarations: [
    UserComponent
  ]
})
export class UserModule { }
