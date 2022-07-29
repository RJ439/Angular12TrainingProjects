import { Component, Input, OnInit } from "@angular/core";
import { CustomersDataService } from "src/app/dataServices/customers.data.services";
import { ICustomer } from "src/app/models/iCustomer";

@Component({
    selector: 'app-customers-list',
    templateUrl: './customers-list.component.html'
})

export class CustomersListComponent implements OnInit {
    title: string = "";
    currencyCode: string = "INR";
    ordersTotal : number = 55;
    isAscendingSort: boolean = true;
    filteredCustomers: ICustomer[] = [];
    // backing field
    _customers : ICustomer[] = [];

    // Expose _customers as a property (interface)
    get customers() : ICustomer[] {
        return this._customers;
    }

   @Input() set customers(value: ICustomer[]) {
        this._customers = this.filteredCustomers = value;
        this.calculateOrderTotals();
    }
    filterCustomers(filterText:string) {
        console.log(`Filtering customers on ${filterText}`);
        if(filterText.length > 0) {
        // this.filteredCustomers = this.customers.filter((cust:ICustomer)=> {
        //     return cust.id.toString().toLowerCase().indexOf(filterText.toLocaleLowerCase()) > -1 ||
        //     cust.name.toString().toLowerCase().indexOf(filterText.toLocaleLowerCase()) > -1 ||
        //     cust.city.toString().toLowerCase().indexOf(filterText.toLocaleLowerCase()) > -1 ||
        //     cust.customerSince.toString().toLowerCase().indexOf(filterText.toLocaleLowerCase()) > -1 ||
        //     cust.orderTotal.toString().toLowerCase().indexOf(filterText.toLocaleLowerCase()) > -1
        // })
        this.custService.searchCustomers(filterText)
        .subscribe((custs : ICustomer[]) => {
            console.log(custs);
            this.filteredCustomers = custs;
        })
        }
        else{
            this.filteredCustomers = this.customers;
        }
}
    calculateOrderTotals() {
        if(this.customers) {
            this.ordersTotal = 0;
            this._customers.forEach((cust)=> {
                this.ordersTotal += cust.orderTotal;
            })
        }
    }
    sortCustomers(sortProp: string) {
        this.isAscendingSort = !this.isAscendingSort;
        if(this.isAscendingSort) {
            this.filteredCustomers.sort((a:any,b:any)=> {
                return a[sortProp] > b[sortProp] ?-1: 1;
            })
        }
        else {
            this.customers.sort((a:any,b:any)=> {
                return a[sortProp] < b[sortProp] ?-1: 1;
            })
        }
    }
    saveFilterList() {
        localStorage.setItem("myFilterData", JSON.stringify(this.filterCustomers))
    }
    loadFilterList() {
        const strData = localStorage.getItem("myFilterData");
        if(strData != null) {
            this.filteredCustomers = JSON.parse(strData);
        }
        // recalculate totals
        this.calculateOrderTotals();
    }
    public constructor(private custService: CustomersDataService) {}

    ngOnInit(): void {
        this.title = "I am customers list component";
    }
}