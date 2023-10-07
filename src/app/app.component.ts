import { Component, OnInit } from '@angular/core';
import { HttpService } from './service/http.service';
import { Todo } from './models/todo.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'httptest';
  todos: Todo[] = [];

  constructor(private http:HttpService) {
    
  }

  ngOnInit(): void {
    this.http.getData()
        .subscribe((data)=>this.todos=data);
  }
}
