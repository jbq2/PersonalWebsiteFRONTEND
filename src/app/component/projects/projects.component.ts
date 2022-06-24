import { Helper } from './../../lib/helpers';
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

  constructor() { }

  ngOnInit(): void { }
}
