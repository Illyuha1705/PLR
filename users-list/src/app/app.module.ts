import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersListModule } from './components/users-list/users-list.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonModule, UsersListModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
