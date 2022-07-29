import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { throwError, Observable } from "rxjs";

import {catchError, map } from "rxjs/operators";
import { ICustomer } from "../models/iCustomer";

@Injectable()
export class CustomersDataService {
    customersUrl = "http://localhost:3000/customers";
    searchCustomersUrl = "http://localhost:3000/customers/";
    constructor(private mySocket:HttpClient){ }
    getAllCustomers() : Observable<ICustomer[]> {
        return this.mySocket.get<ICustomer[]>(this.customersUrl)
        .pipe(
            catchError(this.handleError)
        )
    }
    getCustomersIdAbove102() : Observable<ICustomer[]> {
        return this.mySocket.get<ICustomer[]>(this.customersUrl)
        .pipe(
            map(customers => {
                let custs = customers.filter((cust)=> cust.id > 102);
                return custs;
            }),
            catchError(this.handleError)
        )
    }
    searchCustomers(byName: string) : Observable<ICustomer[]> {
        return this.mySocket.get<ICustomer[]>(this.searchCustomersUrl+byName)
        .pipe(
            catchError(this.handleError)
        )
    }
    handleError(error:any){
        return throwError(error || "come error from API");
    }
}