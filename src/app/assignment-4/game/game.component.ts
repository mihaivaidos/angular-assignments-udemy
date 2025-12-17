import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  oddNumbers = signal<number[]>([]);
  evenNumbers = signal<number[]>([]);

  onIntervalFired(number: number) {
    if (number % 2 === 0) {
      this.evenNumbers.update(oldNumbers => [...oldNumbers, number]);
    } else {
      this.oddNumbers.update(oldNumbers => [...oldNumbers, number]);
    }
  }
}
