import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomersModule } from './app-customers/customers.module';
import { OrdersModule } from './app-orders/orders.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiKeyCustomerHeaderInterceptor } from './interceptors/apiKey.customerheader.interceptor';
import { AuthInfoCustomerHeaderInterceptor } from './interceptors/authInfo.customerheader.interceptor';
import { LayoutModule } from './layoutComponents/layout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    CustomersModule,
    OrdersModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass: ApiKeyCustomerHeaderInterceptor,
      multi: true
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass: AuthInfoCustomerHeaderInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
