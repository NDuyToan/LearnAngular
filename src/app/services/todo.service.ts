import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Todo} from './../models/todo.class';



@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public API:string = 'http://5982b2e834e4a300116fea0d.mockapi.io/api/todos';

  constructor(
    public http: HttpClient
  ) { }
  getAllToDo(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.API);
  }
  addTodo(todo: Todo): Observable<Todo>{
    return this.http.post<Todo>(this.API, todo);
  }

  handleError(err){
    if( err.error instanceof Error){
      console.log(`Client-side error: ${err.error.message}`);
    } else{
      console.log(`Server-side error: ${err.status} - ${err.error}`);
    }
  }
}
