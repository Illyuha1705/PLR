import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../store/users/service/users.service';
import { UsersQuery } from '../../store/users/query/users.query';
import { UserInterface } from '../../interfaces/user.interface';
import { UsersStore } from '../../store/users/store/users.store';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  usersList: UserInterface[] = [];
  selectedUser: UserInterface = {} as UserInterface;

  constructor(
    private usersService: UsersService,
    private usersQuery: UsersQuery,
    private usersStore: UsersStore
  ) {}

  ngOnInit(): void {
    this.checkIsUsersListChanged();
  }

  getUsers(): void {
    this.usersService.getUsers();
  }

  checkIsUsersListOnStore(): boolean {
    return this.usersQuery.hasEntity();
  }

  closeCard(): void {
    this.usersStore.update({ selectedUser: null });
    this.setSelectedUser();
  }

  chooseUser(userId: string): void {
    const user = this.usersList.find((user) => user.id === userId);
    this.usersStore.update({ selectedUser: user });
    this.setSelectedUser();
  }

  checkIsUserChosen(): boolean {
    return !!this.usersQuery.getValue().selectedUser;
  }

  private setUsersList(): void {
    this.usersList = this.usersQuery.getValue().usersList;
  }

  private checkIsUsersListChanged(): void {
    this.usersService.usersListWasUpdated$.subscribe({
      next: () => this.setUsersList()
    });
  }

  private setSelectedUser(): void {
    this.selectedUser = this.usersStore.getValue().selectedUser;
  }
}
