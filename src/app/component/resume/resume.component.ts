import { Course } from './../../interface/course';
import { CourseService } from './../../service/course.service';
import { ProjectService } from './../../service/project.service';
import { Project } from './../../interface/project';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Helper } from 'src/app/lib/helpers';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit{

  experiences: Map<any, any>;
  achievements: Map<any, any>;
  coursework: Course[];
  constructor(private projectService: ProjectService, private courseService: CourseService, private router: Router) {
    
    this.experiences = new Map<string, string[]>();
    this.experiences.set('Internet Application Developer | Kinexis Consulting', [
      'Jun. 2022 - Present',
      'Utilizing WordPress to develop an appointment scheduler',
      'Assessing several plugins and platforms for the app',
      'Meeting with higher ups to provide ideas'
    ]);
    this.experiences.set('STEM Instructor | BuiltByMe Learning Institution', [
      'Oct. 2021 - Present',
      'Tutor programming in Scratch and Python',
      'Explain fundamental programming concepts',
      'Assist in growth from programming in Scratch to Python'
    ]);
    this.experiences.set('IT Department Intern | New Jersey Urology', [
      'Jun. 2020 - Sep. 2020',
      'Acquired software trouble shooting skills',
      'Assisted in PC hardware and EHR software upgrades',
      'Helped in upgrading 1000+ devices across NJU branches',
      'Completed upgrade project 2 weeks ahead of schedule'
    ]);

    this.achievements = new Map<string, string[]>();
    this.achievements.set(`Dean's Scholar for the YWCC`, [
      'Sep. 2020 - Present',
      `Admitted to Dean's List for the Ying Wu College of Computing (YWCC) upon admission to NJIT.`
    ]);
    this.achievements.set(`NJIT Academic Excellence Scholarship`, [
      'Jun. 2020',
      'Acquired upon admission to NJIT for maintaining honors status throughout my high school career.'
    ]);

    this.coursework = [];

   }


  ngOnInit(): void {

    this.courseService.getCourses().subscribe(response => {
      this.coursework = response.data['courses'];

      this.coursework.forEach(function (c) {
        let tempsd = Helper.convertDate(c.startdate);
        c.startdate = tempsd;
  
        if(c.enddate != null){
          let temped = Helper.convertDate(c.enddate);
          c.enddate = temped;
        }
      });
    })
    
  }

  onClickProject(id: number){
    this.router.navigate(['/project'], {
      queryParams: { 'id': id }
    });
  }

}
