import { Component, OnInit }     from '@angular/core';

import { TodoItemComponent }     from './todo-item/todo-item.component';
import { TodoService }           from './todo.service';

import { ItemModel }             from './model/item-model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoService]
})

export class AppComponent implements OnInit {
  title = 'ToDo List';
  items: ItemModel[];
  errorMessage = '';

  constructor(private todoService: TodoService) {

  }

  getItems() {
      this.todoService.getItems()
         .subscribe(
           items => this.items = items,
           error =>  this.errorMessage = <any>error);
  }

  ngOnInit() {
    this.getItems();
  }

  addItem(newTitle: string) {
      this.todoService.addItem(newTitle)
         .subscribe(
           items => this.getItems(),
           error =>  this.errorMessage = <any>error);
  }
}
