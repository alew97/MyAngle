import { Component, OnInit } from '@angular/core';
import { ShowPostService } from '../show-post.service';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {

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
