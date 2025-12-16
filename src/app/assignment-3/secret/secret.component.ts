import {Component} from '@angular/core';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrl: './secret.component.css'
})
export class SecretComponent {
  showContent = false;
  clickCounter = 0;
  log = [];

  onDisplay() {
    this.showContent = !this.showContent;
    this.clickCounter++;
    this.log.push(this.clickCounter);
  }
}
