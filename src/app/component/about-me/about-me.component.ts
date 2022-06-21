import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent{

  background: string;
  currently:string;
  interests: string;
  goals: string;
  constructor() { 
    this.background = 'This is my background!';


    this.currently = 'This is me currently!';


    this.interests = 'These are my interests!';

    
    this.goals = 'These are my goals!';
  }

}
