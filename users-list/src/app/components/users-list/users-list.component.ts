import { Component, OnInit } from '@angular/core';
import { UserInterface, UserShotInfoInterface } from '../../interfaces/user.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  usersShortInfo: UserShotInfoInterface[] = [];
  user: UserInterface | undefined;

  ngOnInit(): void {
  }

  isUsersShortInfo(): boolean {
    return this.usersShortInfo.length > 0;
  }

  checkIsUserChosen(): boolean {
    return this.user !== undefined;
  }

  closeCard(): void {
    this.user = undefined;
  }
}
