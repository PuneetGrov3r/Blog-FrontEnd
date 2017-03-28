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
      for (let i = 0; i < $inactive.length; i++){ $inactive.removeClass('active'); }
      for (let i = 0; i < $inactive.length; i++){ $active.addClass('active'); }
    });
  }
 }