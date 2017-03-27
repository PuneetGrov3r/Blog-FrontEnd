import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { Home } from './components/home/home.component';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, Home, Header, Footer],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
