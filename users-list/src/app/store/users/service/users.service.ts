import { EventEmitter, Injectable, Output } from '@angular/core';
import { UsersStore } from '../store/users.store';
import { UsersQuery } from '../query/users.query';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { UserInterface } from '../../../interfaces/user.interface';
import { API_USERS } from '../../../constants/api.constants';
import { catchError } from 'rxjs/operators';

@Injectable()
export class UsersService {
  @Output() usersListWasUpdated$: EventEmitter<UserInterface[]> =
    new EventEmitter<UserInterface[]>();

  constructor(
    private selectedUsersStore: UsersStore,
    private usersQuery: UsersQuery,
    private httpClient: HttpClient
  ) {}

  getUsers(): void {
    this.httpClient
      .get<UserInterface[]>(API_USERS)
      .pipe(catchError(this.handleError<UserInterface[]>('getUsers', [])))
      .subscribe({
        next: (users: UserInterface[]) => {
          this.setUsersList(users);
          this.usersListWasUpdated$.next();
        }
      });
  }

  updateSelectedUser(user: UserInterface) {
    this.selectedUsersStore.update({ selectedUser: user });
  }

  private setUsersList(users: UserInterface[]): void {
    this.selectedUsersStore.set({ usersList: users });
    console.log(this.selectedUsersStore.getValue());
  }

  private handleError<T>(
    operation = 'operation',
    result?: T
  ): (error: any) => Observable<T> {
    return (error: any): Observable<T> => {
      console.log(error);

      return of(result as T);
    };
  }
}
