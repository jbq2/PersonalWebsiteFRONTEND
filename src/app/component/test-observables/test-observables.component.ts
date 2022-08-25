import { Router } from '@angular/router';
import { ProjectService } from 'src/app/service/project.service';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CustomResponse } from 'src/app/interface/custom-response';
import { Project } from 'src/app/interface/project';
import { Helper } from 'src/app/lib/helpers';

@Component({
  selector: 'app-test-observables',
  templateUrl: './test-observables.component.html',
  styleUrls: ['./test-observables.component.css']
})
export class TestObservablesComponent implements OnInit {

  public isLoading$: Observable<Boolean>;
  public projects$: Observable<Project[]>

  constructor(private projectService: ProjectService) { 
    this.isLoading$ = of(false);

    console.log('isLoading: False (Initial)');
    
    this.projects$ = of([]);
  }

  ngOnInit(): void {
    this.isLoading$ = of(true)
    console.log('isLoading: True (Loading)');

    this.projectService.getProjects()
    .subscribe(response => {

      this.projectService.getProjects()
      .subscribe(response => {
        let data: Project[] = response.data['projects'];
  
        data.forEach(function (p) {
          let tempsd = Helper.convertDate(p.startdate);
          p.startdate = tempsd;
    
          if(p.enddate != null){
            let temped = Helper.convertDate(p.enddate);
            p.enddate = temped;
          }
        });
  
        this.isLoading$ = of(false);
        console.log('isLoading: False (Loaded)');
        this.projects$ = of(data);
      });
    });
  }

}
