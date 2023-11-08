import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ORegisterComponent } from './Access/o-register/o-register.component';
import { RegisterCComponent } from './Access/register-c/register-c.component';
import { RegisterSComponent } from './Access/register-s/register-s.component';
import { HomeSupComponent } from './Supplier/home-sup/home-sup.component';
import { HomeCliComponent } from './Client/home-cli/home-cli.component';
import { LoginComponent } from './Access/login/login.component';
import { AddPSupComponent } from './Supplier/add-p-sup/add-p-sup.component';
import { InputTextModule } from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,

    ORegisterComponent,
    RegisterCComponent,
    RegisterSComponent,
    HomeSupComponent,
    HomeCliComponent,
    LoginComponent,
    AddPSupComponent
  ],
  imports: [
    InputTextModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
