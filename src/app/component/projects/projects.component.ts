import { Months } from './../../months';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, of, startWith, Subscription } from 'rxjs';
import { DataState } from 'src/app/enum/data-state.enum';
import { AppState } from 'src/app/interface/app-state';
import { CustomResponse } from 'src/app/interface/custom-response';
import { Project } from 'src/app/interface/project';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  appState$: Observable<AppState<CustomResponse>> | undefined;
  projects: Project[];
  constructor(private projectService: ProjectService, private router: Router) {
    this.projects = [];
  }

  ngOnInit(): void {

    this.projectService.getProjects().subscribe(response => {
      this.projects = response.data['projects'];
    });

  }

  onClickProject(id: number){
    this.router.navigate(['/project'], {
      queryParams: { 'id': id }
    });
  }

}
