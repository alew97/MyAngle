import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FullscreenService } from '../fullscreen.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  fullscreen$: Observable<boolean>;

  constructor(private router: Router, private fullscreenService: FullscreenService) { }

  ngOnInit() {
    //this.fullscreen$ = this.fullscreenService.fullscreen$;
  }

  logOut() {
    this.router.navigate(['/login'])
  }

}
