import {Component, output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {
  intervalFired = output<number>();
  interval;
  private counter = 0;

  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.counter);
      this.counter++;
    }, 1000);
  }

  onStopGame() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
