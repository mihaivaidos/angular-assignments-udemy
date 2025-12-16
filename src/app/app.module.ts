import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {WarningAlertComponent} from './assignment-1/warning-alert/warning-alert.component';
import {SuccessAlertComponent} from './assignment-1/success-alert/success-alert.component';
import {UsernameComponent} from './assignment-2/username/username.component';
import {FormsModule} from '@angular/forms';
import { SecretComponent } from './assignment-3/secret/secret.component';
import { GameControlComponent } from './assignment-4/game-control/game-control.component';
import { OddComponent } from './assignment-4/odd/odd.component';
import { EvenComponent } from './assignment-4/even/even.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    UsernameComponent,
    SecretComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
