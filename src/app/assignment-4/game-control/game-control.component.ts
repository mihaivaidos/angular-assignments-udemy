import {Component, output, signal} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {
  intervalFired = output<number>();
  private interval: ReturnType<typeof setInterval>;
  private counter = signal(0);

  onStartGame() {
    this.interval = setInterval(() => {
      this.counter.update(value => value + 1);
      this.intervalFired.emit(this.counter());
    }, 1000);
  }

  onStopGame() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
