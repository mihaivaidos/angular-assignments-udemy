import {inject, Injectable, signal} from '@angular/core';
import {CounterService} from './counter.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  activeUsers = signal<string[]>(['Max', 'Anna']);
  inactiveUsers = signal<string[]>(['Chris', 'Manu']);
  private counterService = inject(CounterService);

  setToInactive(id: number) {
    const user = this.activeUsers()[id];
    this.activeUsers.update(users => users.filter((_, i) => i !== id));
    this.inactiveUsers.update(users => [...users, user]);
    this.counterService.incrementActiveToInactive();
  }

  setToActive(id: number) {
    const user = this.inactiveUsers()[id];
    this.inactiveUsers.update(users => users.filter((_, i) => i !== id));
    this.activeUsers.update(users => [...users, user]);
    this.counterService.incrementInactiveToActive();
  }
}
