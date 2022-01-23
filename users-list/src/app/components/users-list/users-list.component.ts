import { Component }       from '@angular/core';
import { GetUsersService } from '../../services/users-list/get-users.service';
import { UserInterface }   from '../../interfaces/user.interface';
import { UsersService }    from '../../services/users-list/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {

  constructor(private getUsersService: GetUsersService,
              private usersService: UsersService) {}

  getUsers(): void {
    this.getUsersService.getUsers().subscribe({
      next: (users: UserInterface[]) => {
        this.usersService.setUsers(users);
      },
      error: err => console.log(err)
    });
  }
}
