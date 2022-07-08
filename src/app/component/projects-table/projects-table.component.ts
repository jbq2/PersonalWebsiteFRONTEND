import { Router } from '@angular/router';
import { ProjectService } from '../../service/project.service';
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/interface/project';
import { Helper } from 'src/app/lib/helpers';

@Component({
  selector: 'app-projects-table',
  templateUrl: './projects-table.component.html',
  styleUrls: ['./projects-table.component.css']
})
export class ProjectsTableComponent implements OnInit {

  projects: Project[];

  constructor(private projectService: ProjectService, private router: Router) {
    this.projects = [];
  }

  ngOnInit(): void {

    this.projectService.getProjects().subscribe(response => {
      this.projects = response.data['projects'];

      this.projects.forEach(function (p) {
        let tempsd = Helper.convertDate(p.startdate);
        p.startdate = tempsd;
  
        if(p.enddate != null){
          let temped = Helper.convertDate(p.enddate);
          p.enddate = temped;
        }
      });
    });

  }

  onClickProject(id: number){
    this.router.navigate(['/project'], {
      queryParams: { 'id': id }
    });
  }
}
