import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router:Router){}
  title = 'fundooAdmin';
  getErrorMessage="";
  uname="";
  pswd="";
  submit(){
    this.uname=$('#uname').val();
    this.pswd=$('#psw').val();
    try{
      if(this.uname=='' || this.pswd=='' ){
        this.getErrorMessage = 'Feild is required';
        return;
      }
      else{
        $.ajax({
          url: "http://fundoonotes.incubation.bridgelabz.com/api/user/adminLogin",
          type: "post",
          dataType: "json",
          data: JSON.stringify({
            "email": this.uname,
            "password": this.pswd
          }),
          contentType: 'application/json; charset=utf-8',
          success: (data: any) => {
            console.log("Succesfull login")
            console.log(this.router);
            localStorage.setItem('admintoken', data['id']);
            this.router.navigate([''])
          },
          error:(jqXHR, textStatus, errorThrown) =>{
            this.getErrorMessage="unAuthorized User";
             console.log('error data ', textStatus);
          },

          timeout: 120000,
        });
      }
    }catch(err){
        console.log("Error while login");
    }
  }

  ngOnInit() {
  }

}
