import { EventEmitter, Injectable, Output } from '@angular/core';
import { UserInterface }                    from '../../interfaces/user.interface';
import { UserShotInfoInterface } from '../../interfaces/user-shot-info.interface';

@Injectable()
export class UsersService {
  @Output() usersChanged$: EventEmitter<UserInterface[]> = new EventEmitter<UserInterface[]>();

  private users: UserInterface[] = [];
  private usersShortInfo: UserShotInfoInterface[] = [];

  get Users(): UserInterface[] {
    return this.users;
  }

  get UsersShortInfo(): UserShotInfoInterface[] {
    return this.usersShortInfo;
  }

  setUsers(users: UserInterface[]) {
    this.users = [...users];
    this.setUsersShotInfo();
    this.usersChanged$.next();
  }

  private setUsersShotInfo(): void {
    this.users.forEach((user: UserInterface) => {
      this.usersShortInfo.push({
        name: user.name,
        email: user.email
      });
    })
  }
}
