import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { AddPostService } from '../add-post.service';
import { MatDialog } from '@angular/material';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  public post: Post;

  constructor(private addPostService: AddPostService, private dialog: MatDialog, private commonService: CommonService) { 
    this.post = new Post();
  }

  ngOnInit() {
  }

  addPost() {
    if (this.post.title && this.post.description) {
      this.addPostService.addPost(this.post).subscribe(res => {
        this.closeModal();
        this.commonService.notifyPostAddition();
      });
    } else {
      alert('Please enter a title and description')
    }
  }

  closeModal() {
    this.dialog.closeAll();
  }
}
