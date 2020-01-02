import { Component, OnInit,OnDestroy } from '@angular/core';
import{ TodoService} from './services/todo.service';
import {Subscription} from 'rxjs'
import { from } from 'rxjs';
import { Todo } from './models/todo.class';
import { stringify } from 'querystring';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  public subscription : Subscription;
  public todos: Todo[] = [];
  public title: string;
  public completed: boolean;
  
  constructor(
    public todoService: TodoService
  ){}

  ngOnInit(){
    this.loadData();
  }

  loadData(){
    this.subscription = this.todoService.getAllToDo().subscribe( data => {
     this.todos = data;
    }, error =>{
      this.todoService.handleError(error);
    });
  }

  ngOnDestroy(){
    if( this.subscription){
      this.subscription.unsubscribe();
    }
  }
  onAddtodo(){
    let todo = new Todo(this.title, this.completed);
    //this.todos.push(todo);
    //console.log(todo);
    this.subscription = this.todoService.addTodo(todo).subscribe(data =>{
      this.todos.push(data)
    })
  }
}
