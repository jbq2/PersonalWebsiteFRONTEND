import { Helper } from './../../lib/helpers';
import { Months } from './../../months';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  date: Date;
  dateStr: string;
  constructor() { 

    this.date = new Date();

    let m = new Months;

    this.dateStr = `${this.date.getDate()} ${Helper.monthMap.get(this.date.getMonth())}, ${this.date.getFullYear()}`;
  }

}
