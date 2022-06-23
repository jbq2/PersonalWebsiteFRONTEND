import { ProjectService } from './../../service/project.service';
import { Project } from './../../interface/project';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  projects: Project[];
  experiences: Map<any, any>;//key: string, value: string[]
  achievements: Map<any, any>;
  coursework: string[];
  constructor(private projectService: ProjectService, private router: Router) {

    this.projects = [];
    
    this.experiences = new Map<string, string[]>([
      ['Internet Application Developer | Kinexis Consulting', [
        'Jun. 2022 - Present',
        'Utilizing WordPress to develop an appointment scheduler',
        'Assessing several plugins and platforms for the app',
        'Meeting with higher ups to provide ideas'
      ]],
      ['STEM Instructor | BuiltByMe Learning Institution', [
        'Oct. 2021 - Present',
        'Tutor programming in Scratch and Python',
        'Explain fundamental programming concepts',
        'Assist in growth from programming in Scratch to Python'
      ]],
      ['IT Department Intern | New Jersey Urology', [
        'Jun. 2020 - Sep. 2020',
        'Acquired software trouble shooting skills',
        'Assisted in PC hardware and EHR software upgrades',
        'Helped in upgrading 1000+ devices across NJU branches',
        'Completed upgrade project 2 weeks ahead of schedule'
      ]]
    ]);

    this.achievements = new Map<string, string[]>([
      [`Dean's Scholar for the YWCC`, [
        'Sep. 2020 - Present',
        `Admitted to Dean's List for the Ying Wu College of Computing (YWCC) upon admission to NJIT.`
      ]],
      [`NJIT Academic Excellence Scholarship`, [
        'Jun. 2020',
        'Acquired upon admission to NJIT for maintaining honors status throughout my high school career.'
      ]]
    ]);

    this.coursework = [
      'CS 331 H | Database Design and Management (Jan. 2022 - May 2022)',
      'CS 280 | Programming Language Concepts (Jan. 2022 - May 2022)',
      'IT 202 | Internet Applications (Jan. 2022 - May 2022)',
      'CS 241 | Foundations of Computer Science (Jan. 2022 - May 2022)',
      'CS 114 H | Intro to Computer Science II (Sep. 2021 - Dec. 2021)',
      'IS 350 | Computers, Society, and Ethics (Sep. 2021 - Dec. 2021)',
      'MATH 333 | Probability and Statistics (Sep. 2020 - Dec. 2020)'
    ];

   }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(response => {
      this.projects = response.data["projects"];

      let chars = [];
      console.log(this.projects.length);
      for(let i = 0; i < this.projects.length; i++){
        let shortDesc = '';
        chars = [...this.projects[i].description];
  
        for(let j = 0; j < chars.length && chars[j] != '.'; j++){
          shortDesc += chars[j];
        }
  
        console.log(shortDesc);
        this.projects[i].description = shortDesc;
      }
    })
  }

  onClickProject(id: number){
    this.router.navigate(['/project'], {
      queryParams: { 'id': id }
    });
  }

}
