import { NgModule, AfterContentInit }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
declare var $: any;

import { AppComponent }  from './app.component';
import { Home } from './components/home/home.component';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, Home, Header, Footer],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
  constructor() {
      $(document).ready(function () {
      let $menumain = document.getElementsByClassName('menumain');
      let $signin = document.getElementsByClassName('signin');
      let $signup = document.getElementsByClassName('signup');
      let $about = document.getElementsByClassName('aboutshow');
      let country = [];
      function sidemenutoggle() {$('.ui.sidebar').sidebar('toggle');}
      function signinshow() {$('.ui.signin1.modal').modal('show');}
      function countrylist() {$('.ui.search').search({source: country});}
      function signupshow() {$('.ui.signup1.modal').modal('show');}
      function aboutshow() {$('.ui.small.modal').modal('show');}
      for (let i = 0; i < $signup.length; i++) {$signup[i].addEventListener('click', signupshow, false);}
      for (let i = 0; i < $signup.length; i++) {$signup[i].addEventListener('click', signupshow, false);}
      for (let i = 0; i < $about.length; i++) {$about[i].addEventListener('click', aboutshow, false);}
      for (let i = 0; i < $menumain.length; i++) {$menumain[i].addEventListener('click', sidemenutoggle, false);}
      $('.message .close').on('click', function() {$(this).closest('.message').transition('fade');});
      });
  }
 }
