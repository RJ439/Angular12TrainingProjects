import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { UtilitiesModule } from "../utilities/utilities.module";
import { FormsModule } from "@angular/forms";
import { CustomersDataService } from "../dataServices/customers.data.services";
import { DataServicesModule } from "../dataServices/dataServices.module";
import { OrdersComponent } from "./orders.component";
import { OrdersRoutingModule } from "./orders.routing.module";


@NgModule({
    declarations: [OrdersComponent],
    exports: [OrdersComponent],
    imports: [BrowserModule, UtilitiesModule, FormsModule, DataServicesModule, OrdersRoutingModule]
})

export class OrdersModule {
    
}