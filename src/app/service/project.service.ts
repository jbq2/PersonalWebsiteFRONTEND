import { Project } from './../interface/project';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getServers } from 'dns';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { CustomResponse } from '../interface/custom-response';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {

  private readonly url: string = 'any'; // http://localhost:8080/projects

  constructor(private http: HttpClient) {}
  
  // getProjects(): Observable<CustomResponse> {
  //   return this.http.get<CustomResponse>(`${this.url}/list`);
  // }

  //above is a procedural approach

  projects$ = <Observable<CustomResponse>> 
  this.http.get<CustomResponse>(`${this.url}/list`)
  .pipe(
    tap(console.log),
    catchError(this.handleError)
  );


  project$ = (id: number) => <Observable<CustomResponse>>
  this.http.get<CustomResponse>(`${this.url}/get/${id}`)
  .pipe(
    tap(console.log),
    catchError(this.handleError)
  );


  projectByName$ = (name: string) => <Observable<CustomResponse>>
  this.http.get<CustomResponse>(`${this.url}/getByName/${name}`)
  .pipe(
    tap(console.log),
    catchError(this.handleError)
  );


  save$ = (project: Project) => <Observable<CustomResponse>> 
  this.http.post<CustomResponse>(`${this.url}/save`, project)
  .pipe(
    tap(console.log),
    catchError(this.handleError)
  );


  update$ = (project: Project) => <Observable<CustomResponse>> 
  this.http.post<CustomResponse>(`${this.url}/update`, project)
  .pipe(
    tap(console.log),
    catchError(this.handleError)
  );


  delete$ = (id: number) => <Observable<CustomResponse>>
  this.http.delete<CustomResponse>(`${this.url}/delete/${id}`)
  .pipe(
    tap(console.log),
    catchError(this.handleError)
  );


  deleteByName$ = (name: string) => <Observable<CustomResponse>>
  this.http.delete<CustomResponse>(`${this.url}/deleteByName/${name}`)
  .pipe(
    tap(console.log),
    catchError(this.handleError)
  );


  handleError(handleError: any): Observable<never> {
    return throwError ('Method not implemented.');
  }

}
