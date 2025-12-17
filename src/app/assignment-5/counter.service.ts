import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  activeToInactiveCounter = signal(0);
  inactiveToActiveCounter = signal(0);

  incrementActiveToInactive() {
    this.activeToInactiveCounter.set(this.activeToInactiveCounter() + 1);
    console.log('Active to Inactive: ' + this.activeToInactiveCounter());
  }

  incrementInactiveToActive() {
    this.inactiveToActiveCounter.set(this.inactiveToActiveCounter() + 1);
    console.log('Inactive to Active: ' + this.inactiveToActiveCounter());
  }
}
