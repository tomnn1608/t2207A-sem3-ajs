import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ClassroomComponent} from "./classroom/classroom.component";
import {StudentComponent} from "./student/student.component";
import {LoginComponent} from "./bai tap/bai tap login-register/login.component";
import {RegisterComponent} from "./bai tap/bai tap login-register/register.component";
import {WeatherComponent} from "./bai tap/bai tap weather/weather.component";
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

const appRoutes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'weather',component:WeatherComponent},
];
@NgModule({
  declarations: [
    AppComponent,ClassroomComponent,StudentComponent,LoginComponent,RegisterComponent,WeatherComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
