import { Component, OnInit } from '@angular/core';
import { CustomersDataService } from '../dataServices/customers.data.services';
import { ICustomer } from '../models/iCustomer';

@Component({
  selector: 'app-customers',
  templateUrl: "./customers.component.html"
})
export class CustomersComponent implements OnInit {
    title: string = "";
    lstCustomers : ICustomer[] = [];
    shouldDisplay : boolean = false;

    public constructor(private custService : CustomersDataService) {
        console.log("App customers component constructor called");
    }

    ngOnInit(): void {
        console.log("App customers component initialized");
        this.title = "Customers Component";
        // this.lstCustomers = [
        //     {"id":101,"name":"Angela Merkel","city":"Berlin","customerSince":new Date(2007,9,22),"orderTotal":5555.55},
        //     {"id":102,"name":"Kevin Marsh","city":"London","customerSince":new Date(2004,3,12),"orderTotal":6666.66},
        //     {"id":103,"name":"Hamid Ajbouti","city":"Kiev","customerSince":new Date(2003,4,2),"orderTotal":7777.55},
        //     {"id":104,"name":"Elon Musk","city":"Gotenburg","customerSince":new Date(2017,8,15),"orderTotal":2222.55},
        //     {"id":105,"name":"Patty Berger","city":"New Delhi","customerSince":new Date(2018,6,9),"orderTotal":4444.55},
        //     {"id":106,"name":"Ian Zachariah","city":"Hyderabad","customerSince":new Date(2012,5,14),"orderTotal":3333.55},
        // ];
        this.custService.getAllCustomers()
        .subscribe((custs : ICustomer[]) => {
            console.log(custs);
            this.lstCustomers = custs;
        })
    }
}