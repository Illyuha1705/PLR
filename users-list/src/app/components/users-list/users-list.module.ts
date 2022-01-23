import { NgModule }           from '@angular/core';
import { ButtonComponent }    from '../button/button.component';
import { UsersListComponent } from './users-list.component';

@NgModule({
  declarations: [UsersListComponent, ButtonComponent],
  imports: [],
  exports: [UsersListComponent, ButtonComponent]
})
export class UsersListModule {}
