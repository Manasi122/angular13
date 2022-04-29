import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  username:string=""
  pwd:string=""

  login(){
    if(this.username=="admin" && this.pwd=="admin"){
      this.router.navigate(['/home'])
      console.log("LoggedIn")
      
      
    }else{
      console.log("Invalid")
    }
      
  }
}
