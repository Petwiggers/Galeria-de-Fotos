import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarroselFotosComponent } from "../Components/carrosel-fotos/carrosel-fotos.component";
@NgModule({
  declarations: [
    AppComponent,
    CarroselFotosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
