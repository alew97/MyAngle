import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { LoginService } from '../login.service';
import { MatDialog } from '@angular/material' 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user: User;

  constructor(private loginService: LoginService, private dialog: MatDialog) {
    this.user = new User();
  }

  ngOnInit() {
  }

  addUser() {
    if (this.user.email && this.user.password) {
      this.loginService.addUser(this.user).subscribe(res => {
        this.closeModal();
      })
    } else {
      alert('Please enter an email and a password')
    }
  }

  closeModal() {
    this.dialog.closeAll();
  }

}
