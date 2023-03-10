import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CanvasComponent} from "./canvas/canvas.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CanvasComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
