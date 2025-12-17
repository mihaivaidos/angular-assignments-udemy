import {Component, inject} from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  usersService = inject(UsersService);

  onSetToActive(id: number) {
    this.usersService.setToActive(id);
  }
}
