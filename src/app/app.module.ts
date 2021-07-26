import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AbbonamentiComponent } from './abbonamenti/abbonamenti.component';
import { PalestreComponent } from './palestre/palestre.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent, AbbonamentiComponent, PalestreComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
