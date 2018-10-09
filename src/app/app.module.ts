import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import {ConverterService} from "./converter.service";


@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ConverterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
