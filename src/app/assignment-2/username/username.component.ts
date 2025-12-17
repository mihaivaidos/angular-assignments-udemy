import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrl: './username.component.css'
})
export class UsernameComponent {
  username = signal('');

  onReset() {
    this.username.set('');
  }
}
