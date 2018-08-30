import { Component, OnInit } from '@angular/core';
import { ShowPostService } from '../show-post.service';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-show-post-component',
  templateUrl: './show-post-component.component.html',
  styleUrls: ['./show-post-component.component.css'],
  providers: [ShowPostService]
})
export class ShowPostComponentComponent implements OnInit {

  public posts: any[];

  constructor(private showPostService: ShowPostService, private commonService: CommonService) { }

  ngOnInit() {
    this.getAllPost();

    this.commonService.postAdded_Observable.subscribe(res => {
      this.getAllPost();
    })
  }

  getAllPost() {
    this.showPostService.getAllPost().subscribe(result => {
      this.posts = result['data'];
    });
  }

}
