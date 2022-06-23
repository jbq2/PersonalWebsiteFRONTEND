import { ProjectService } from './../../service/project.service';
import { Project } from './../../interface/project';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  projects!: Project[];
  constructor(private projectService: ProjectService, private router: Router) {

    this.projects = [];
   }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(response => {
      this.projects = response.data["projects"];

      let chars = [];
      console.log(this.projects.length);
      for(let i = 0; i < this.projects.length; i++){
        let shortDesc = '';
        chars = [...this.projects[i].description];
  
        for(let j = 0; j < chars.length && chars[j] != '.'; j++){
          shortDesc += chars[j];
        }
  
        console.log(shortDesc);
        this.projects[i].description = shortDesc;
      }
    })
  }

  onClickProject(id: number){
    this.router.navigate(['/project'], {
      queryParams: { 'id': id }
    });
  }

}
