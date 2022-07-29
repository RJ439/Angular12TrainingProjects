import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SecurityDataService } from "../dataServices/security.data.service";
import { AuthInfo } from "../models/domain.model";

@Component({
    selector: 'app-login',
    template: `
    <table>
    <tr>
    <td colspan="2">Login</td>
    </tr>
    <tr>
    <td>User Id</td>
    <td><input type="text" [(ngModel)]="loginModel.userId"></td>
    </tr>
    <tr>
    <td>Password</td>
    <td><input type="password" [(ngModel)]="loginModel.password"></td>
    </tr>
    <tr>
    <td></td>
    <td><input type="submit" (click)="login()"></td>
    </tr>
    `
})

export class LoginComponent implements OnInit {
    loginModel: AuthInfo;
    data = '';

    constructor(private router: Router, private securitySvc: SecurityDataService){
        this.loginModel = new AuthInfo('xxxx', 'xxxx');
        this.data = JSON.stringify(this.loginModel);
    }

    login(){
        //call the auth service
        //get the user info

        this.securitySvc.authUser(this.loginModel)
        .subscribe((userInfo)=> {
            localStorage.setItem('userInfo', JSON.stringify(userInfo));
            this.router.navigateByUrl("/customers")
        })
    }

    ngOnInit(): void {
        
    }
}