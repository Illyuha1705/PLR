import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { UsersState, UsersStore } from '../store/users.store';
import { UserInterface } from '../../../interfaces/user.interface';

@Injectable()
export class UsersQuery extends QueryEntity<UsersState> {
  constructor(protected store: UsersStore) {
    super(store);
  }

  get usersList(): UserInterface[] {
    return this.getValue().usersList;
  }

  get userId(): string {
    return this.getValue().selectedUser.id;
  }
}
