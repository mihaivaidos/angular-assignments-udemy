import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {WarningAlertComponent} from './assignment-1/warning-alert/warning-alert.component';
import {SuccessAlertComponent} from './assignment-1/success-alert/success-alert.component';
import {UsernameComponent} from './assignment-2/username/username.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SecretComponent} from './assignment-3/secret/secret.component';
import {GameControlComponent} from './assignment-4/game-control/game-control.component';
import {OddComponent} from './assignment-4/odd/odd.component';
import {EvenComponent} from './assignment-4/even/even.component';
import {GameComponent} from './assignment-4/game/game.component';
import {ActiveUsersComponent} from './assignment-5/active-users/active-users.component';
import {InactiveUsersComponent} from './assignment-5/inactive-users/inactive-users.component';
import {UsersComponent} from './assignment-5/users/users.component';
import {UserFormComponent} from './assignment-6/user-form/user-form.component';
import {UserReactiveFormComponent} from './assignment-7/user-reactive-form/user-reactive-form.component';
import {ReversePipe} from './assignment-8/reverse.pipe';
import {SortPipe} from './assignment-8/sort.pipe';
import {AppStatusComponent} from './assignment-8/app-status/app-status.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    UsernameComponent,
    SecretComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    GameComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    UsersComponent,
    UserFormComponent,
    UserReactiveFormComponent,
    ReversePipe,
    SortPipe,
    AppStatusComponent,
    AppStatusComponent
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
