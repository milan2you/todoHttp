import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  getData():Observable<Todo[]>{

    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }
}
