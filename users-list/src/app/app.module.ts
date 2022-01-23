import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }       from './app.component';
import { UsersListModule }    from './components/users-list/users-list.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    UsersListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
