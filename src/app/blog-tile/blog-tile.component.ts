import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../models/post';

@Component({
  selector: 'app-blog-tile',
  templateUrl: './blog-tile.component.html',
  styleUrls: ['./blog-tile.component.css']
})
export class BlogTileComponent implements OnInit {

  @Input()
  post: Post;

  constructor() { }

  ngOnInit() {
  }

}
