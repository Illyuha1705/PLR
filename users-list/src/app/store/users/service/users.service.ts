import { Injectable } from "@angular/core";
import { UsersStore } from "../store/users.store";
import { UsersQuery } from "../query/users.query";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { UserInterface } from "../../../interfaces/user.interface";
import { API_USERS } from "../../../constants/api.constants";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private selectedUsersStore: UsersStore,
              private usersQuery: UsersQuery,
              private httpClient: HttpClient) {
  }

  getUsers(): void {
    this.httpClient
      .get<UserInterface[]>(API_USERS)
      .pipe(catchError(this.handleError<UserInterface[]>('getUsers', [])))
      .subscribe({
        next: (users: UserInterface[]) => this.updateUsersList(users),
      });
  }

  /*private handleGetUsersList(users: UserInterface[]): void {
    this.updateUsersList(users);
  }*/

  private updateUsersList(users: UserInterface[]): void {
    this.selectedUsersStore.update({ usersList: users });
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
