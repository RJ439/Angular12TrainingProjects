import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { CustomersDataService } from "./customers.data.services";
import { SecurityDataService } from "./security.data.service";
import { OrdersDataService } from "./orders.data.service";

@NgModule({
    providers: [CustomersDataService, SecurityDataService, OrdersDataService],
    imports: [CommonModule, HttpClientModule]
})

export class DataServicesModule {}