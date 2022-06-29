import { Course } from './../interface/course';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { CustomResponse } from '../interface/custom-response';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private readonly url: string = 'http://localhost:8080/courses'

  constructor(private http: HttpClient) { }

  public getCourses(): Observable<CustomResponse<Course>> {
    return this.http.get<CustomResponse<Course>>(`${this.url}/list`)
    .pipe(
      tap(console.log),
      catchError(this.handleError)
    );
  }
  
  
  public getCourse(id: number): Observable<CustomResponse<Course>> {
    return this.http.get<CustomResponse<Course>>(`${this.url}/get/${id}`)
    .pipe(
      tap(console.log),
      catchError(this.handleError)
    );
  }


  public save(course: Course): Observable<CustomResponse<Course>> {
    return this.http.post<CustomResponse<Course>>(`${this.url}/secure/save`, course)
    .pipe(
      tap(console.log),
      catchError(this.handleError)
    );
  }


  public update(course: Course): Observable<CustomResponse<Course>> {
    return this.http.post<CustomResponse<Course>>(`${this.url}/secure/update`, course)
    .pipe(
      tap(console.log),
      catchError(this.handleError)
    );
  }


  public delete(id: number): Observable<CustomResponse<Course>> {
    return this.http.delete<CustomResponse<Course>>(`${this.url}/secure/delete/${id}`)
    .pipe(
      tap(console.log),
      catchError(this.handleError)
    );
  }

  
  private handleError(error: HttpErrorResponse): Observable<never> {
    return throwError (`Error occurred - Error code: ${error.status}`);
  }
}
