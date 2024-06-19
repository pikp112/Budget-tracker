import { Component, inject } from '@angular/core';
import { MasterService } from '../services/master.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isLogin: boolean = true;
  private masterService = inject(MasterService);
  private router = inject(Router);

  register: any = { 
    "userId": 0,
    "userName":"",
    "emailId":"",
    "fullName":"",
    "role":"",
    "createdDate": new Date(),
    "password":"" 
  }

  loginObj: any = {
    "userName": "",
    "password": ""
  }

  createUser(){
    debugger;
    this.masterService.createUser(this.register)
      .subscribe((res: any) => {
        if(res.result){
          console.info('User created successfully!');
          sessionStorage.setItem('budgetUser', JSON.stringify(res.data));
          this.router.navigateByUrl('home');
        } else {
          alert(res.message);
        }
      });
  }

  onLogin(){
    debugger;
    this.masterService.loginUser(this.loginObj)
      .subscribe((res: any) => {
        if(res.result){
          alert('User login successfully!');
        } else {
          alert(res.message);
        }
      });
  }
}
