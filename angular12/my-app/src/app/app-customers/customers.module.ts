import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CustomersComponent } from "./customers.component";
import { CustomersListComponent } from "./customers-list/customers-list.component";
import { BrowserModule } from "@angular/platform-browser";
import { UtilitiesModule } from "../utilities/utilities.module";
import { FormsModule } from "@angular/forms";
import { FilterTextBoxComponent } from "./customers-list/filter.textbox.component";
import { CustomersDataService } from "../dataServices/customers.data.services";
import { DataServicesModule } from "../dataServices/dataServices.module";
import { CustomersRoutingModule } from "./customers.routing.module";


@NgModule({
    declarations: [CustomersComponent, CustomersListComponent, FilterTextBoxComponent],
    exports: [CustomersComponent],
    imports: [BrowserModule, UtilitiesModule, FormsModule, DataServicesModule, CustomersRoutingModule]
})

export class CustomersModule {
    
}