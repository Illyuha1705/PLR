import { EventEmitter, Injectable, OnDestroy, Output } from '@angular/core';
import { UsersStore } from '../store/users.store';
import { UsersQuery } from '../query/users.query';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { UserInterface } from '../../../interfaces/user.interface';
import { API_USERS } from '../../../constants/api.constants';
import { catchError, takeUntil } from 'rxjs/operators';

@Injectable()
export class UsersService implements OnDestroy {
  @Output() usersListWasUpdated$: EventEmitter<UserInterface[]> =
    new EventEmitter<UserInterface[]>();

  private destroy$: Subject<boolean> = new Subject();

  constructor(
    private selectedUsersStore: UsersStore,
    private usersQuery: UsersQuery,
    private httpClient: HttpClient
  ) {}

  getUsers(): void {
    this.httpClient
      .get<UserInterface[]>(API_USERS)
      .pipe(
        catchError(this.handleError<UserInterface[]>('getUsers', [])),
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (users: UserInterface[]) => {
          this.setUsersList(users);
          this.usersListWasUpdated$.next();
        }
      });
  }

  updateSelectedUser(user: UserInterface): void {
    this.selectedUsersStore.update({ selectedUser: user });
  }

  private setUsersList(users: UserInterface[]): void {
    this.selectedUsersStore.update({ usersList: users });
    this.selectedUsersStore.set({ usersList: users });
  }

  private handleError<T>(
    operation = 'operation',
    result?: T
  ): (error: any) => Observable<T> {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
