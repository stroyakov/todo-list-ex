import { Component, Input, OnInit } from '@angular/core';

import { ItemModel }         from '../model/item-model'

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})

export class TodoItemComponent implements OnInit {
    @Input() data: ItemModel;
    editable: boolean;

  constructor() {
      this.editable = false;
  }

  ngOnInit() {
      
  }

  startEdit() {
      this.editable = true;
  }

  endEdit(event: KeyboardEvent) {
      if (event.keyCode === 13) {
          this.editable = false;
      }
  }

  delete () {

  }

}
