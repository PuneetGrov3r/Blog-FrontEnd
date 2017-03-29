import { Component, Input } from '@angular/core';
declare var $: any;
class Blogtype {
  id: number;
  date: number;
  month: string;
  year: number;
  heading: string;
  data: string;
}

@Component({
  selector: 'blog-show',
  template: `
  <div class="ui fullscreen modal" *ngIf="blog" style="position:fixed !important;top: 10vw !important;">
    <i class="close icon"></i>
    <div class="header">{{blog.month}}</div>
    <div class="description"></div>
  </div>
  `,
})
export class BlogDetailComponent {
  @Input() blog: Blogtype;

  constructor() {
    $(document).ready(function () {
      let $icon = $('.close.icon');
      $('.ui.fullscreen.modal').modal('show');
      let $close = $('.ui.fullscreen.modal.visible');
      function modalhide(){
        $close.removeClass('active');
      }
      for (let i = 0; i < $icon.length; i++) {$icon[i].addEventListener('click', modalhide, false);}
    });
  }
}