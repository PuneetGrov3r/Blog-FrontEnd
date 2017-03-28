import { Component, OnInit } from '@angular/core';
declare var $: any;
import { BlogService } from '../../services/blog.service';

class Blogtype {
  id: number;
  date: number;
  month:string;
  year:number;
  heading:string;
  data:string;
}

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  providers: [BlogService],
})


export class Blog implements OnInit { 
  blogs: Blogtype[];

  constructor( private blogService: BlogService ){
    $(document).ready(function () {
      let $inactive = $('.togglemenu>.item');
      let $active = $('.blogactive');
      //console.log($inactive);
      for (let i = 0; i < $inactive.length; i++){ $inactive.removeClass('active'); }
      for (let i = 0; i < $inactive.length; i++){ $active.addClass('active'); }
    });
  }

  getBlogData(): void {
    this.blogService.getBlogData().then(blogs => this.blogs = blogs);
  }

  ngOnInit(): void {
    this.getBlogData();
  }
 }