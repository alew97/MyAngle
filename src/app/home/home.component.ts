import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatCardModule, MatButtonModule } from '@angular/material';

import { AddPostComponent } from '../add-post/add-post.component';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FullscreenService } from '../fullscreen.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fullscreen$: Observable<boolean>;

  constructor(private router: Router, private fullscreenService: FullscreenService, private dialog: MatDialog) { }
  
  ngOnInit() {
    this.fullscreen$ = this.fullscreenService.fullscreen$;
    this.router.navigate(['home/allPosts'])
  }

  logOut() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate([''])
  }

  goHome() {
    this.router.navigate(['home'])
  }
  
  viewAllPosts() {
    this.router.navigate(['home/allPosts'])
  }

  openModal() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(AddPostComponent, dialogConfig);
  }
}
