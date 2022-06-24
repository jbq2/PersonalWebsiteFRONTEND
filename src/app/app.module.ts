import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './component/home/home.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { ProjectDetailsComponent } from './component/project-details/project-details.component';
import { FooterComponent } from './partials/footer/footer.component';
import { AboutMeComponent } from './component/about-me/about-me.component';
import { ResumeComponent } from './component/resume/resume.component';
import { ProjectsTableComponent } from './component/projects-table/projects-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    NavbarComponent,
    ProjectDetailsComponent,
    FooterComponent,
    AboutMeComponent,
    ResumeComponent,
    ProjectsTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
