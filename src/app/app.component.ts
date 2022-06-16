import { map, Observable, startWith, catchError, of } from 'rxjs';
import { ProjectService } from './service/project.service';
import { Component, OnInit } from '@angular/core';
import { AppState } from './interface/app-state';
import { CustomResponse } from './interface/custom-response';
import { DataState } from './enum/data-state.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  appState$: Observable<AppState<CustomResponse>> | undefined;
  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.appState$ = this.projectService.projects$
    .pipe(
      map(response => {
        return { dataState: DataState.LOADED_STATE, appData: response }
      }),
      startWith({ dataState: DataState.LOADING_STATE }),
      catchError((error: string) => {
        return of({ dataState: DataState.ERROR_STATE, error })
      })
    );
  }
}
