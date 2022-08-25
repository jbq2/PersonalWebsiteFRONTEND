import { Router } from '@angular/router';
import { ProjectService } from '../../service/project.service';
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/interface/project';
import { Helper } from 'src/app/lib/helpers';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-projects-table',
  templateUrl: './projects-table.component.html',
  styleUrls: ['./projects-table.component.css']
})

export class ProjectsTableComponent implements OnInit {

  public isLoading$: Observable<Boolean>;
  public projects$: Observable<Project[]>;

  constructor(private projectService: ProjectService, private router: Router) { 
    this.isLoading$ = of(false);
    this.projects$ = of([]);
  }

  ngOnInit(): void {
    this.isLoading$ = of(true);

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
        this.projects$ = of(data);
      });
    });
  }
  //TODO: implement observable style of presenting data with courses here as well
  //TODO: fully implement this for ResumeComponent (loading courses)

  onClickProject(id: number){
    this.router.navigate(['/project'], {
      queryParams: { 'id': id }
    });
  }

}
