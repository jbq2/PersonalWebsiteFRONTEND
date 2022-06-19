import { map, Observable, startWith, catchError, of } from 'rxjs';
import { ProjectService } from './service/project.service';
import { Component, OnInit } from '@angular/core';
import { AppState } from './interface/app-state';
import { CustomResponse } from './interface/custom-response';
import { DataState } from './enum/data-state.enum';
import 'bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  constructor(private projectService: ProjectService) {}
}
