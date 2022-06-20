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
      console.log(params['id']);
    });

    this.projectService.getProject(this.id).subscribe(response => {
      this.project = response.data['project'];
    });
  }

}
