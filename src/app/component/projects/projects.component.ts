import { Component, OnInit } from '@angular/core';
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
  projects: Project[] | undefined;
  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {

    this.projectService.getProjects().subscribe(response => {
      this.projects = response.data['projects'];
    });

    // this.appState$ = this.projectService.projects$
    // .pipe(
    //   map(response => {
    //     this.projects = response.data["projects"]
    //     return { dataState: DataState.LOADED_STATE, appData: response }
    //   }),
    //   startWith({ dataState: DataState.LOADING_STATE }),
    //   catchError((error: string) => {
    //     return of({ dataState: DataState.ERROR_STATE, error })
    //   })
    // );

    // this.appState$.subscribe(appState => {
    //   this.projects = appState.appData;
    // });

  }

}
