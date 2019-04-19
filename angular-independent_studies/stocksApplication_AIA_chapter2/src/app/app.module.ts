import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryComponent } from './components/summary/summary.component';
import { FormsModule } from '@angular/forms';
import {StocksService} from "./services/stock-service";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageComponent } from './components/manage/manage.component';
import {AppRoutes} from "./routes";


@NgModule({
  declarations: [
  AppComponent,
  SummaryComponent,
  DashboardComponent,
  ManageComponent,
  ],
  imports: [
  BrowserModule,
  HttpClientModule,
  FormsModule, AppRoutes
  ],
  providers: [StocksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
