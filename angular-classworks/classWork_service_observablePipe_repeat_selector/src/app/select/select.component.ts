import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
/*Generic selector that receives an array; */
export class SelectComponent implements OnInit {
  @Input() myArray; // //decorator
  @Output() selectChoice = new EventEmitter<string>(); //<-something on change
  bananaValue;
  constructor() {
  }
  ngOnInit() {
    this.bananaValue = this.myArray[0];
  }
  sendChoice() {
    this.selectChoice.emit(this.bananaValue);
  }
}
