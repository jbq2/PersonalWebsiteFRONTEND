import { Helper } from './../../lib/helpers';
import { Project } from './../../interface/project';
import { ProjectService } from 'src/app/service/project.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  id!: number;
  project!: Project;
  constructor(private projectService: ProjectService, private route: ActivatedRoute) { }

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
    });
  }

}
