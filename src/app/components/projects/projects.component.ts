import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
})
export class Projects  { 
  constructor(){
    $(document).ready(function () {
      let $inactive = $('.togglemenu>.item');
      let $active = $('.projectsactive');
      //console.log($inactive);
      for (let i = 0; i < $inactive.length; i++){ $inactive.removeClass('active'); }
      for (let i = 0; i < $inactive.length; i++){ $active.addClass('active'); }
    });
  }
 }