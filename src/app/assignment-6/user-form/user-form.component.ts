import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  defaultSubscription = 'advanced';
  submittedData: {
    email: string,
    password: string,
    subscription: string
  } | null = null;

  onSubmit(formData: NgForm) {
    if (formData.form.invalid) {
      return;
    }

    const enteredEmail = formData.form.value.email;
    const enteredPassword = formData.form.value.password;
    const selectedSubscription = formData.form.value.subscription;

    this.submittedData = {
      email: enteredEmail,
      password: enteredPassword,
      subscription: selectedSubscription
    };

    console.log(enteredEmail, enteredPassword, selectedSubscription);
    formData.resetForm();
  }
}
