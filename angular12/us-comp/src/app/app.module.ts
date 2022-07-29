import { HttpClientModule } from '@angular/common/http';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { NewsComponentUs } from './news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponentUs
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector:Injector) {
    const el = createCustomElement(NewsComponentUs, {injector});
    customElements.define('news-widget-us', el);
  }
  ngDoBootstrap() {}
 }
