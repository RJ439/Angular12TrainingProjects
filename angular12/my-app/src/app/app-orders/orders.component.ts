import { Component, OnInit } from "@angular/core";
import { OrdersDataService } from "../dataServices/orders.data.service";
import { IOrder } from "../models/domain.model";

@Component({
    selector: 'app-orders',
    templateUrl: "./orders.component.html"
})

export class OrdersComponent implements OnInit {

    orders : IOrder[] = [];

    public constructor(private orderService : OrdersDataService) {}

    ngOnInit(): void {
        this.orderService.getAllOrders()
        .subscribe((response) => {
            console.log(response);
            this.orders = response;
        })
    }

   
}
