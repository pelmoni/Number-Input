import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {StandardInputComponent} from "./standard-input/standard-input.component";
import {AppRoutingModule} from "./app.routes";



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AppComponent,
    StandardInputComponent
  ],
  declarations: [

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
