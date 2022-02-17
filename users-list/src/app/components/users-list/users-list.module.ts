import { NgModule } from '@angular/core';
import { UsersListComponent } from './users-list.component';
import { AtomButtonModule } from '../../../../projects/generic-components/src/lib/atoms/atom-button/atom-button.module';
import { MoleculeCardModule } from '../../../../projects/generic-components/src/lib/molecules/molecule-card/molecule-card.module';
import { UsersStoreModule } from '../../store/users/users-store.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [UsersListComponent],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AtomButtonModule,
    MoleculeCardModule,
    UsersStoreModule
  ],
  exports: [UsersListComponent],
  providers: []
})
export class UsersListModule {}
