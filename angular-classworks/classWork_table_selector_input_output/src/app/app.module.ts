import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgifComponent } from './ngif/ngif.component';
import { SelectComponent } from './select/select.component';
import { TableComponent } from './table/table.component';
import { FormsModule } from '@angular/forms';
import { RedsquareComponent } from './redsquare/redsquare.component';

@NgModule({
  declarations: [
    AppComponent,
    NgifComponent,
    SelectComponent,
    TableComponent,
    RedsquareComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
