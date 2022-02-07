import { Component, OnInit } from '@angular/core';
import { GetUsersService } from '../../services/users-list/get-users.service';
import { UserInterface, UserShotInfoInterface } from '../../interfaces/user.interface';
import { UsersService } from '../../services/users-list/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  usersShortInfo: UserShotInfoInterface[] = [];
  user: UserInterface | undefined;

  constructor(
    private getUsersService: GetUsersService,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.checkForUsersData();
  }

  getUsers(): void {
    this.getUsersService.getUsers().subscribe({
      next: (users: UserInterface[]) => {
        this.usersService.setUsers(users);
      },
      error: (err) => console.log(err)
    });
  }

  isUsersShortInfo(): boolean {
    return this.usersShortInfo.length > 0;
  }

  checkIsUserChosen(): boolean {
    return this.user !== undefined;
  }

  userChosen(id: number): void {
    this.user = this.usersService.Users.find((user) => user.id === id);
  }

  closeCard(): void {
    this.user = undefined;
  }

  private checkForUsersData(): void {
    this.usersService.usersChanged$.subscribe({
      next: () => this.getUsersShotInfo()
    });
  }

  private getUsersShotInfo(): void {
    this.usersShortInfo = [...this.usersService.UsersShortInfo];
  }
}
