import { NgModule }           from '@angular/core';
import { ButtonComponent }    from '../button/button.component';
import { UsersListComponent } from './users-list.component';
import { GetUsersService }    from '../../services/users-list/get-users.service';
import { HttpClientModule }   from '@angular/common/http';
import { UsersService }       from '../../services/users-list/users.service';

@NgModule({
  declarations: [UsersListComponent, ButtonComponent],
  imports: [HttpClientModule],
  exports: [UsersListComponent, ButtonComponent],
  providers: [GetUsersService, UsersService]
})
export class UsersListModule {}
