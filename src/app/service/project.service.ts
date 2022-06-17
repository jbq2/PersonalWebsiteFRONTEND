import { Project } from './../interface/project';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { CustomResponse } from '../interface/custom-response';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {

  private readonly url: string = 'http://localhost:8080/projects'; // http://localhost:8080/projects

  constructor(private http: HttpClient) {}

  // projects$ = <Observable<CustomResponse>> 
  // this.http.get<CustomResponse>(`${this.url}/list`)
  // .pipe(
  //   tap(console.log),
  //   catchError(this.handleError)
  // );
  
  public getProjects(): Observable<CustomResponse> {
    return this.http.get<CustomResponse>(`${this.url}/list`);
  }


  // project$ = (id: number) => <Observable<CustomResponse>>
  // this.http.get<CustomResponse>(`${this.url}/get/${id}`)
  // .pipe(
  //   tap(console.log),
  //   catchError(this.handleError)
  // );

  public getProject(id: number): Observable<CustomResponse> {
    return this.http.get<CustomResponse>(`${this.url}/get/${id}`);
  }


  // projectByName$ = (name: string) => <Observable<CustomResponse>>
  // this.http.get<CustomResponse>(`${this.url}/getByName/${name}`)
  // .pipe(
  //   tap(console.log),
  //   catchError(this.handleError)
  // );

  public getProjectByName(name: string): Observable<CustomResponse> {
    return this.http.get<CustomResponse>(`${this.url}/getByName/${name}`);
  }


  // save$ = (project: Project) => <Observable<CustomResponse>> 
  // this.http.post<CustomResponse>(`${this.url}/save`, project)
  // .pipe(
  //   tap(console.log),
  //   catchError(this.handleError)
  // );

  public save(project: Project): Observable<CustomResponse> {
    return this.http.post<CustomResponse>(`${this.url}/save`, project);
  }


  // update$ = (project: Project) => <Observable<CustomResponse>> 
  // this.http.post<CustomResponse>(`${this.url}/update`, project)
  // .pipe(
  //   tap(console.log),
  //   catchError(this.handleError)
  // );

  public update(project: Project): Observable<CustomResponse> {
    return this.http.post<CustomResponse>(`${this.url}/update`, project);
  }


  // delete$ = (id: number) => <Observable<CustomResponse>>
  // this.http.delete<CustomResponse>(`${this.url}/delete/${id}`)
  // .pipe(
  //   tap(console.log),
  //   catchError(this.handleError)
  // );

  public delete(id: number): Observable<CustomResponse> {
    return this.http.delete<CustomResponse>(`${this.url}/delete/${id}`);
  }


  // deleteByName$ = (name: string) => <Observable<CustomResponse>>
  // this.http.delete<CustomResponse>(`${this.url}/deleteByName/${name}`)
  // .pipe(
  //   tap(console.log),
  //   catchError(this.handleError)
  // );

  public deleteByName(name: string): Observable<CustomResponse> {
    return this.http.delete<CustomResponse>(`${this.url}/deleteByName/${name}`);
  }


  private handleError(error: HttpErrorResponse): Observable<never> {
    return throwError (`Error occurred - Error code: ${error.status}`);
  }

}
