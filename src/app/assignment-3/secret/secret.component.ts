import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrl: './secret.component.css'
})
export class SecretComponent {
  showContent = signal(false);
  clickCounter = signal(0);
  log = signal<number[]>([]);

  onDisplay() {
    this.showContent.update(value => !value);
    this.clickCounter.update(value => value + 1);
    this.log.update(arr => [...arr, this.clickCounter()]);
  }
}
