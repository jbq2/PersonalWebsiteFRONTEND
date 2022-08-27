import { Title } from '@angular/platform-browser';
import { Course } from './../../interface/course';
import { Constants } from './../../lib/constants';
import { Helper } from './../../lib/helpers';
import { Project } from './../../interface/project';
import { ProjectService } from 'src/app/service/project.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  id: number;
  project: Project;
  course: Course;
  constructor(private projectService: ProjectService, private courseService: CourseService,private route: ActivatedRoute, private title: Title) { 

    this.title.setTitle('Joshua Quizon | Project Details');
    this.id = -1;
    this.project = Constants.emptyProject;
    this.course = Constants.emptyCourse;

  }

  ngOnInit(): void {

    this.route.queryParams.subscribe((params: Params) => {
      this.id = params['id'];
    });

    this.projectService.getProject(this.id).subscribe(response => {
      this.project = response.data['project'];

      let tempsd = Helper.convertDate(this.project.startdate);
      this.project.startdate = tempsd;

      if(this.project.enddate != null){
        let temped = Helper.convertDate(this.project.enddate);
        this.project.enddate = temped;
      }

      this.courseService.getCourse(this.project.course_id).subscribe(response =>{
        //TODO change type of project column 'course' to INT, and assign it to the id of courses table
        this.course = response.data['course'];
      });
    });
  }

}
