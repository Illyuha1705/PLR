import { Component, OnInit } from '@angular/core';
import { GetUsersService }   from '../../services/users-list/get-users.service';
import { UserInterface }         from '../../interfaces/user.interface';
import { UsersService }          from '../../services/users-list/users.service';
import { UserShotInfoInterface } from '../../interfaces/user-shot-info.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit{
  usersShortInfo: UserShotInfoInterface[] = [];

  constructor(private getUsersService: GetUsersService,
              private usersService: UsersService) {}

  ngOnInit(): void {
    this.checkForUsersData();
  }

  getUsers(): void {
    this.getUsersService.getUsers().subscribe({
      next: (users: UserInterface[]) => {
        this.usersService.setUsers(users);
      },
      error: err => console.log(err)
    });
  }

  isUsersShortInfo(): boolean {
    return this.usersShortInfo.length > 0;
  }

  private checkForUsersData(): void {
    this.usersService.usersChanged$.subscribe({
      next: () => this.getUsersShotInfo()
    })
  }

  private getUsersShotInfo(): void {
    this.usersShortInfo = [...this.usersService.UsersShortInfo];
  }
}
