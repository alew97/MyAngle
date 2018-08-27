import { Component, OnInit } from '@angular/core';
import { ShowPostService } from '../show-post.service';

@Component({
  selector: 'app-show-post-component',
  templateUrl: './show-post-component.component.html',
  styleUrls: ['./show-post-component.component.css'],
  providers: [ShowPostService]
})
export class ShowPostComponentComponent implements OnInit {

  public posts: any[];

  constructor(private showPostService: ShowPostService) { }

  ngOnInit() {
    this.getAllPost();
  }

  getAllPost() {
    this.showPostService.getAllPost().subscribe(result => {
      this.posts = result['data'];
    });
  }

}
