import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComplainWelcomeComponent } from './complain-welcome/complain-welcome.component';
import { ComplainHomeComponent } from './complain-home/complain-home.component';

@NgModule({
  declarations: [
    AppComponent,
    ComplainWelcomeComponent,
    ComplainHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
