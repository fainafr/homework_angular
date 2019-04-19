import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  keys;
  garage = []; //[{K:V, K:V}, {K:V, K:V} ]
  constructor() { }

  ngOnInit() {
    this.garage.push(
      {model: 'Volga', year: 1964}
    );
    this.garage.push({model: 'Pobeda', year: 1953});
    this.garage.push({model: 'Moskvich', year: 1972});
    this.garage.push({model: 'Zaporozhets', year: 1970});
    this.garage.push({model: 'Izh', year: 1975});

    this.keys = Object.keys(this.garage[0]);  //<- getting K of first entry;
  }

}
