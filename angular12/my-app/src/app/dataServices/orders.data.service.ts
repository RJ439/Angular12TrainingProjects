import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { throwError, Observable } from "rxjs";

import {catchError, map } from "rxjs/operators";
import { IOrder } from "../models/domain.model";

@Injectable()
export class OrdersDataService {
    OrdersUrl = "http://localhost:3000/orders";

    constructor(private mySocket:HttpClient){ }

    getAllOrders() : Observable<IOrder[]> {
        return this.mySocket.get<IOrder[]>(this.OrdersUrl)
        .pipe(
            catchError(this.handleError)
        )
    }

    handleError(error:any){
        return throwError(error || "come error from API");
    }
}