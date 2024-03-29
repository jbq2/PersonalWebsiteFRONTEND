import { TestObservablesComponent } from './component/test-observables/test-observables.component';
import { ResumeComponent } from './component/resume/resume.component';
import { AboutMeComponent } from './component/about-me/about-me.component';
import { ProjectDetailsComponent } from './component/project-details/project-details.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { HomeComponent } from './component/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'project', component: ProjectDetailsComponent },
  { path: 'aboutme', component: AboutMeComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'testobs', component: TestObservablesComponent },
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
