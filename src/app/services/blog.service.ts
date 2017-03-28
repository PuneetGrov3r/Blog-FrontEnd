import { Injectable } from '@angular/core';

class Blogtype {
  id: number;
  date: number;
  month:string;
  year:number;
  heading:string;
  data:string;
}

import { BlogData } from './blog.data';

@Injectable()
export class BlogService {
    getBlogData(): Promise<Blogtype[]> {
        return Promise.resolve(BlogData);
    }
}
