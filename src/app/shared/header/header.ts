import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'header',
  templateUrl: './header.html',
})
export class Header  { 
  constructor(){
    //$(document).ready(function () {
    //let $nav = $('.togglemenu');
    //let $win = $(window);
    //let winH = $win.height();
    //$win.on("scroll", function () {
    //  if ($(this).scrollTop() < winH ) {
    //    $nav.addClass("inverted");
    //  } 
    //  else {
    //    $nav.removeClass("inverted");
    //  }}).on("resize", function(){winH = $(this).height();});
    //});
  }
 }
