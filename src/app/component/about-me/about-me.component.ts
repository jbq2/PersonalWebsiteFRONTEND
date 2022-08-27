import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent{

  public background: string;
  public currently:string;
  public interests: string;
  public goals: string;
  public lastupdated: string;
  constructor(private title: Title) {
    this.title.setTitle('Joshua Quizon | About Me') 
    this.lastupdated = 'August 27, 2022';
    
    this.background = `Hello, my name is Joshua Quizon and welcome to the 'About Me' page of my personal
    blog/website/portfolio.  I am Filipino, born and raised, but moved to the United 
    States when I was around 6 or 7 years old.  I graduated from Parsippany High 
    School in 2020 and I am attending the New Jersey Institute of Technology as a 
    computer science major.`;


    this.currently = `I am currently an undergraduate junior at the New Jersey Institute of Technology.
    Since my admission into the college, I have maintained my Dean's Scholar status for
    the Ying Wu College of Computing.  I plan to keep this title for the rest of my 
    college career, as it is a sign of academic excellence and perseverance.  During my 
    sophomore year, I worked two jobs: a front-end associate at Wegmans Food Market and 
    an instructor for BuiltByMe STEM Learning Institution.  At the time of writing this,
    I am currently working for Kinexis Consulting as an application
    developer intern.  In addition to the internship, I am working on a couple of personal projects:
    an Inventory Management Website, and this personal blog/website/portfolio.  I am 
    excited to do so much this summer, as I can already tell that I will learn so much
    from both my internship and self-study.`;


    this.interests = `Ever since I was at a young age, I have always loved computers--initially because I 
    could use them to play videogames.  I believe that is where my interest in 
    computer science and technology originated from.  Aside from computers, I generally 
    love to spend time with family and friends.  I love going out with my friends from
    high school to play volleyball, basketball, and go long boarding.  I still play 
    videogames and am quite knowledgeable in PC specs and parts, though my interest
    in both of those fields have been dialed down since I have graduated from highschool.
    In general, staying active socially and physically is a must in my mind.`;

    
    this.goals = `This summer, I want to learn as
    much as I can about full stack development.  The ability to understand the development
    of a fully operating computer program is something I would love to have.  I think it 
    gives me a lot of value as a potential employee for companies.  To do this, I am currently
    learning to create websites using SpringBoot and Angular.  I also want to prepare myself
    for the first semester of my junior year, as I am taking some rather difficult courses.
    To do this, I will have to familiarize myself with programming with C.  Finally, I want to 
    become very efficient in solving coding interview questions.  Junior year is one of the most
    important times of college, as it is the ideal time to get internship offers.  To do so, I
    must be able to ace coding interviews.  I have a busy year ahead of me, but I have never 
    felt more determined in my life!`;
  }

}
