import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
})
export class Blog { 
  constructor(){
    $(document).ready(function () {
      let $inactive = $('.togglemenu>.item');
      let $active = $('.blogactive');
      console.log($inactive);
      for (let i = 0; i < $inactive.length; i++){ $inactive.removeClass('active'); }
      for (let i = 0; i < $inactive.length; i++){ $active.addClass('active'); }
    });
  }
 }