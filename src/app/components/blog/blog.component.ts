import { Component, OnInit } from '@angular/core';
declare var $: any;
import { BlogService } from '../../services/blog.service';

class Blogtype {
  id: number;
  date: number;
  month: string;
  year: number;
  heading: string;
  data: string;
}

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  providers: [BlogService],
})


export class Blog implements OnInit {
  blogs: Blogtype[];
  selectedBlog: Blog;

  constructor( private blogService: BlogService ) {
    $(document).ready(function () {
      let $inactive = $('.togglemenu>.item');
      let $active = $('.blogactive');
      $inactive.removeClass('active');
      $active.addClass('active');

      let $close = $('.ui.fullscreen.modal.active');
      function modalhide(){
        $close.removeClass('active');
      }
      let $icon = $('.close.icon');
      for (let i = 0; i < $icon.length; i++) {$icon.addEventListener('click', modalhide, false);}
      //let $modal = document.getElementsByClassName('modalshow');
      //function modalshow() {$('.ui.fullscreen.modal').modal('show');}
      //for (let i = 0; i < $modal.length; i++) {$modal[i].addEventListener('click', modalshow, false);}
    });
  }

  getBlogData(): void {
    this.blogService.getBlogData().then(blogs => this.blogs = blogs);
  }

  ngOnInit(): void {
    this.getBlogData();
  }
  onSelect(blog: Blog): void {
    this.selectedBlog = blog;
  }
 }