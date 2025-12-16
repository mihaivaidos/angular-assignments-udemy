import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {WarningAlertComponent} from './assignment-1/warning-alert/warning-alert.component';
import {SuccessAlertComponent} from './assignment-1/success-alert/success-alert.component';
import {UsernameComponent} from './assignment-2/username/username.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    UsernameComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
