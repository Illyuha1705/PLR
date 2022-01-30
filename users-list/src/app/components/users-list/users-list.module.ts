import { NgModule } from '@angular/core';
import { UsersListComponent } from './users-list.component';
import { GetUsersService } from '../../services/users-list/get-users.service';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from '../../services/users-list/users.service';
import { BrowserModule } from '@angular/platform-browser';
import { MoleculeCardComponent } from '../../../../projects/generic-components/src/lib/molecules/molecule-card/molecule-card.component';
import { AtomButtonModule } from '../../../../projects/generic-components/src/lib/atoms/atom-button/atom-button.module';

@NgModule({
  declarations: [UsersListComponent, MoleculeCardComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AtomButtonModule,
  ],
  exports: [UsersListComponent, MoleculeCardComponent],
  providers: [GetUsersService, UsersService]
})
export class UsersListModule {}
