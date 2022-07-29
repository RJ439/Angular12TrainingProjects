import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { throwError, Observable } from "rxjs";

import {catchError, map } from "rxjs/operators";
import { ICustomer } from "../models/iCustomer";
import { AuthInfo, UserInfo } from "../models/domain.model";
import { retry } from "rxjs/operators";

@Injectable()
export class SecurityDataService {
    authUrl = "http://localhost:3000/auth";

    constructor(private mySocket:HttpClient){ }

    authUser(authInfo: AuthInfo) : Observable<UserInfo> {
        return this.mySocket.post<UserInfo>(this.authUrl, authInfo)
        .pipe(
            retry(3),
            catchError(this.handleError)
        )
    }

    authorizeUser(userInfo:UserInfo):Observable<UserInfo>{
        return this.mySocket.post<UserInfo>(this.authUrl, userInfo)
        .pipe(
            retry(3),
            catchError(this.handleError)
        )
    }

    handleError(error:any){
        return throwError(error || "come error from API");
    }
}