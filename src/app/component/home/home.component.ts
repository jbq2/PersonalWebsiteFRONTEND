import { Title } from '@angular/platform-browser';
import { Constants } from './../../lib/constants';
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
  constructor(private title: Title) { 

    this.title.setTitle('Joshua Quizon | Portfolio Home');
    this.date = new Date();
    this.dateStr = `${this.date.getDate()} ${Constants.monthMap.get(this.date.getMonth())}, ${this.date.getFullYear()}`;
  
  }

}
