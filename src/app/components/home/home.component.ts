import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
})
export class Home  { 
  constructor(){
    $(document).ready(function () {
      let $inactive = $('.togglemenu>.item');
      let $active = $('.homeactive');
      //console.log($inactive);
      for (let i = 0; i < $inactive.length; i++){ $inactive.removeClass('active'); }
      for (let i = 0; i < $inactive.length; i++){ $active.addClass('active'); }
    });
  }
 }