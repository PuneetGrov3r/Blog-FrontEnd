import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
declare var $: any;

import { AppComponent }  from './app.component';
import { Home } from './components/home/home.component';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import { Blog } from './components/blog/blog.component';
import { Projects } from './components/projects/projects.component';
import { Resume } from './components/resume/resume.component';

@NgModule({
  imports:      [ 
    BrowserModule,
     RouterModule.forRoot([
       {
         path: '',
         redirectTo: '/home',
         pathMatch: 'full'
       },
       {
         path: 'home',
         component: Home,
       },
      {
        path: 'projects',
        component: Projects
      },
      {
        path: 'blog',
        component: Blog
      },
      {
        path: 'resume',
        component: Resume
      }
    ])
    ],
  declarations: [ AppComponent, Home, Header, Footer, Blog, Projects, Resume],
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
      let $nav = $('.togglemenu');
      let $win = $(window);
      let winH = $win.height();
      $win.on("scroll", function () {if ($(this).scrollTop() > winH ) {$nav.addClass("inverted");} else {$nav.removeClass("inverted");}}).on("resize", function(){winH = $(this).height();});
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
