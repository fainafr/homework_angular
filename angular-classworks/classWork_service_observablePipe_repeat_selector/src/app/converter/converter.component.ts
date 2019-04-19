import { Component, OnInit } from '@angular/core';
import {HttpService} from '../Services/http-service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  rates : number[] = [];
  currencies : string[] = [];
  currFrom;
  currTo;
  valueFrom;
  constructor(private service: HttpService) { }

  ngOnInit(): void {
    console.log(this.service.getRates().subscribe((sub) =>  {
      this.rates = sub.rates;
      this.currencies = sub.currs;
      this.currTo = this.currencies[0];
      this.currFrom = this.currencies[0];
      this.valueFrom = 1;
    }));
  }

  setTo(event){
    this.currTo = event;
  }

  setFrom(event){
    this.currFrom = event;
  }

  getToValue(){
    return  this.valueFrom * this.rates[this.currTo] / this.rates[this.currFrom];
  }

}
