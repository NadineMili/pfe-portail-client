import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ClientsService } from 'src/app/services/clients.service';
import { RegisterService } from 'src/app/services/register.service';
import { Utilisateur } from 'src/app/services/utilisateur';
import { AuthLoginInfo } from '../auth/login-info';
import { TokenStorageService } from '../auth/token-storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  
  private loginInfo: AuthLoginInfo;
  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router) {}
     

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }
  }

  onSubmit() {
    console.log(this.form);

    this.loginInfo = new AuthLoginInfo(
      this.form.username,
      this.form.pwd);


    this.authService.attemptAuth(this.loginInfo).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.authorities);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getAuthorities();
        this.reloadPage();
      
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }
  
//     this.authService.attemptAuth(this.loginInfo).subscribe((data:any) => {
//       if(data){
//         window.sessionStorage.removeItem('token');
//         window.sessionStorage.setItem('token', data.token);
//         window.sessionStorage.removeItem('username');
//         window.sessionStorage.setItem('username', data.username);
//         this.reloadPage();
//       }},
//       (error) => {
//         this.errorMessage = error.error.message;
//         this.isLoginFailed = true;
//       }
//     );
// }
// reloadPage() {
//     window.location.reload();
//   }
}