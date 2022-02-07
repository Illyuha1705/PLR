import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { UserInterface } from "../../../interfaces/user.interface";

export interface UsersState {
  usersList: UserInterface[];
  selectedUser: UserInterface;
}

const UsersInitialState: UsersState = {
  usersList: [],
  selectedUser: {
    id: 0,
    name: '',
    username: '',
    email: '',
    phone: '',
    website: ''
  }
}

@Injectable()
@StoreConfig({ name: 'users-store' })
export class UsersStore extends Store<UsersState> {
  constructor() {
    super(UsersInitialState);
  }
}
