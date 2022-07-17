import { Project } from './../interface/project';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { CustomResponse } from '../interface/custom-response';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {

  private readonly url: string = 'https://jbq2-portfolio-backend.herokuapp.com/api/projects';

  constructor(private http: HttpClient) {}

  
  public getProjects(): Observable<CustomResponse<Project>> {
    return this.http.get<CustomResponse<Project>>(`${this.url}/list`)
    .pipe(
      tap(console.log),
      catchError(this.handleError)
    );
  }


  public getProject(id: number): Observable<CustomResponse<Project>> {
    return this.http.get<CustomResponse<Project>>(`${this.url}/get/${id}`)
    .pipe(
      tap(console.log),
      catchError(this.handleError)
    );
  }


  public save(project: Project): Observable<CustomResponse<Project>> {
    return this.http.post<CustomResponse<Project>>(`${this.url}/save`, project)
    .pipe(
      tap(console.log),
      catchError(this.handleError)
    );
  }


  public update(project: Project): Observable<CustomResponse<Project>> {
    return this.http.post<CustomResponse<Project>>(`${this.url}/update`, project)
    .pipe(
      tap(console.log),
      catchError(this.handleError)
    );
  }


  public delete(id: number): Observable<CustomResponse<Project>> {
    return this.http.delete<CustomResponse<Project>>(`${this.url}/delete/${id}`)
    .pipe(
      tap(console.log),
      catchError(this.handleError)
    );
  }


  private handleError(error: HttpErrorResponse): Observable<never> {
    return throwError (`Error occurred - Error code: ${error.status}`);
  }

}
