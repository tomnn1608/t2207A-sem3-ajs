import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ClassroomComponent} from "./classroom/classroom.component";
import {StudentComponent} from "./student/student.component";
import {LoginComponent} from "./bai tap/login.component";
import {RegisterComponent} from "./bai tap/register.component";

@NgModule({
  declarations: [
    AppComponent,ClassroomComponent,StudentComponent,LoginComponent,RegisterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
