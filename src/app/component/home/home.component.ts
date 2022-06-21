import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  date: Date;
  dateStr: string;
  monthMap: Map<number, string>;
  constructor() { 

    this.date = new Date();

    this.monthMap = new Map<number, string>([
      [0, 'January'],
      [1, 'February'],
      [2, 'March'],
      [3, 'April'],
      [4, 'May'],
      [5, 'June'],
      [6, 'July'],
      [7, 'August'],
      [8, 'September'],
      [9, 'October'],
      [10,'November'],
      [11,'December']
    ])

    this.dateStr = `${this.date.getDate()} ${this.monthMap.get(this.date.getMonth())}, ${this.date.getFullYear()}`
  }

}
