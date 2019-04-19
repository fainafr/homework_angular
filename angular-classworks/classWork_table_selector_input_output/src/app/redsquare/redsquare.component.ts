import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-redsquare',
  templateUrl: './redsquare.component.html',
  styleUrls: ['./redsquare.component.css']
})
export class RedsquareComponent implements OnInit {


  @Input() selectedColor;


  rFlag;
  wFlag;
  bFlag;

  constructor() {
  }

  ngOnInit() {
    this.rFlag = false;
    this.wFlag = false;
    this.bFlag = false;
  }

  selectedColorSetter() {
    this.rFlag = (this.selectedColor === 'red');
    this.wFlag = (this.selectedColor === 'white');
    this.bFlag = (this.selectedColor === 'black');
  }
}

// color toggler
//  clr;
//    this.clr = 'green';
//   buttonHandler() {
//     this.clr = (this.clr === 'red' ?  'green' : 'red');
//   }
