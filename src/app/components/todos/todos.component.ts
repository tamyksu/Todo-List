import { Component, OnInit } from '@angular/core';
import{ Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];
  addItem:Todo;
  inputTodo:string= "";
  constructor() { }

  ngOnInit(): void {
    this.todos=[
      {
      content: 'First todo',
      completed: false
    },
    {
      content: 'Second todo',
      completed: true

    }
  ]
  }
  //we look for our id
  //if our id is false we make it true
  //if our id is true we make it false
  toggleDone(id){
    this.todos.map((v,i)=>{
      if(i==id) v.completed = !v.completed;
      return v; 
    })
  }
  removeContent(id){
    this.todos.map((v,i)=>{
      if(i==id) {
        this.todos.splice(id,1);
      }
     
    })

  }

  AddItem(inputTodo){
    this.addItem={
      content: inputTodo,
      completed: false
    }
    this.todos.push( this.addItem);
    this.inputTodo ="";
  }

}
