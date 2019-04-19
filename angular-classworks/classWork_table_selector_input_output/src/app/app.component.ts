import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'a20190412garage';
  colors: string[];
  cities: string[];
  games: string[];

  selectedColor: string;

  ngOnInit(): void {
    this.colors = ['red', 'black', 'white'];
    this.cities = ['Haifa', 'Chkalovsk', 'Moscow'];
    this.games = ['pomoika2', 'ut2k4', 'l4d2'];
  }
  choiceHandler(event) {
    this.selectedColor = event;
  }
}
