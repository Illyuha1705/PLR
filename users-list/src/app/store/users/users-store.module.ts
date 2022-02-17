import { NgModule } from '@angular/core';
import { UsersQuery } from './query/users.query';
import { UsersStore } from './store/users.store';
import { UsersService } from './service/users.service';

@NgModule({
  declarations: [],
  imports: [],
  providers: [UsersQuery, UsersStore, UsersService]
})
export class UsersStoreModule {}
