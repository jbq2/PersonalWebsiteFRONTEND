import { Project } from './../../interface/project';
import { ProjectService } from 'src/app/service/project.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  project: Project | null | undefined;
  strId: string | null | undefined;
  id: number | undefined;
  constructor(private projectService: ProjectService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.strId = this.route.snapshot.paramMap.get('id');

    this.id = (this.strId != null) ? +this.strId : -1;

    if(this.id != -1){
      this.projectService.getProject(this.id).subscribe(response => {
        this.project = response.data['project'];
      });
    }
    else{
      this.project = null;
    }

  }

}
