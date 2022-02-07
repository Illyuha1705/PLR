import { NgModule } from "@angular/core";
import { UsersQuery } from "./query/users.query";
import { UsersStore } from "./store/users.store";

@NgModule({
  declarations: [],
  imports: [],
  providers: [UsersQuery, UsersStore],
})
export class UsersStoreModule {}

