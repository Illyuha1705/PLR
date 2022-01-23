import { Injectable }      from '@angular/core';
import { UserInterface }   from '../../interfaces/user.interface';

@Injectable()
export class UsersService {
  private users: UserInterface[] = [];

  get Users(): UserInterface[] {
    return this.users;
  }

  setUsers(users: UserInterface[]) {
    this.users = [...users];
  }
}
