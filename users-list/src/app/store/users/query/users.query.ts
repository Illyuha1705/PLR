import { Injectable } from "@angular/core";
import { Query } from "@datorama/akita";
import { UsersState, UsersStore } from "../store/users.store";

@Injectable()
export class UsersQuery extends Query<UsersState> {
  constructor(protected store: UsersStore) {
    super(store);
  }
}
