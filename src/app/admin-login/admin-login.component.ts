import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  admin = {
    name: '',
    pass:''
  };
  constructor(public router: Router){
    
  }
  ALogin()
  {
    if(this.admin.name=='Care Hospital' && this.admin.pass=='CH101')
    {
      alert('!!! Login Successfull !!!');
    this.router.navigate(['bed-unbook'])
    }
  }
}
