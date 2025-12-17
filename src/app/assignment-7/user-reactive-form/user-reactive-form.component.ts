import {Component} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {of} from 'rxjs';

function restrictProjectName(control: AbstractControl) {
  if (control.value !== 'Test') {
    return null;
  }

  return {projectNameContainsTest: true};
}

function restrictProjectNameAsync(control: AbstractControl) {
  if (control.value !== 'Test') {
    return of(null);
  }

  return of({projectNameContainsTest: true});
}

@Component({
  selector: 'app-user-reactive-form',
  templateUrl: './user-reactive-form.component.html',
  styleUrl: './user-reactive-form.component.css'
})
export class UserReactiveFormComponent {
  form = new FormGroup({
    projectName: new FormControl('', {
      validators: [Validators.required],
      asyncValidators: [restrictProjectNameAsync]
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email]
    }),
    status: new FormControl<'stable' | 'critical' | 'finished'>('stable', {
      validators: [Validators.required]
    })
  });

  onSubmit() {
    if (this.form.invalid) {
      console.log('INVALID FORM');
      return;
    }

    console.log(this.form.value);
  }
}
