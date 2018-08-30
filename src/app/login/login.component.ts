import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../login.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  public user: User;

  constructor(private loginService: LoginService, private router: Router, private dialog: MatDialog) { 
    this.user = new User();
  }

  ngOnInit() {
  }

  validateLogin() {
    if (this.user.email && this.user.password) {
      this.loginService.validateLogin(this.user).subscribe(result => {
        console.log('result is', result);
        if (result['status'] === 'success') {
          this.router.navigate(['/home'])
        } else {
          alert('wrong user name and password')
        }
      },
      error => {
        console.log('result is', error);
      });
    } else {
      alert('please enter email and password');
    }
  }

  openRegisterModal() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    this.dialog.open(RegisterComponent, dialogConfig);
  }
}
