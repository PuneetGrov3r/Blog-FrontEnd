import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'resume',
  templateUrl: './resume.component.html',
})
export class Resume { 
  constructor(){
    $(document).ready(function () {
      let $inactive = $('.togglemenu>.item');
      let $active = $('.resumeactive');
      //console.log($inactive);
      $inactive.removeClass('active');
      $active.addClass('active');
    });
  }
 }