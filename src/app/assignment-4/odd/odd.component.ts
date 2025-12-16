import {Component, input} from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrl: './odd.component.css'
})
export class OddComponent {
  number = input.required<number>();
}
