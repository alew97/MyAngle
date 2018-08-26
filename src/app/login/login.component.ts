import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../login.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  public user: User;

  constructor(private loginService: LoginService, private router: Router) { 
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

}
