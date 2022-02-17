import { Injectable } from '@angular/core';
import { EntityStore, StoreConfig } from '@datorama/akita';
import { UserInterface } from '../../../interfaces/user.interface';

export interface UsersState {
  usersList: UserInterface[];
  selectedUser: UserInterface;
}

@Injectable()
@StoreConfig({ name: 'users-store' })
export class UsersStore extends EntityStore<UsersState> {
  constructor() {
    super();
  }
}
