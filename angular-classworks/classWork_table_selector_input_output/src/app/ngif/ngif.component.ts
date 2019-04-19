import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {

  condition: boolean;
  gender: boolean

  constructor(){}

  ngOnInit(){
    this.condition = false;
  }

  buttonHandler(){
    this.condition = !this.condition;
  }

  genderHandler(){
    this.gender = !this.gender;
  }
}
