import { Injectable, Inject }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

import { ItemModel }      from './model/item-model'

@Injectable()
export class TodoService {

  constructor(
  	private http: Http
  ) { }

  getItems(): Observable<ItemModel[]> {
    return this.http.get('https://api.appery.io/rest/1/code/b11d8cf8-fbde-4f1e-a085-488c0b9f5358/exec')
      .map(items => {
        return items.json();
      })
      .catch(error => {
        return error
      })
  }

  addItem(newTitle: string): Observable<ItemModel> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post('https://api.appery.io/rest/1/code/d0ff21f1-be59-4fc8-89dd-d88d08500df7/exec',
      { "title": newTitle }, options)
      .map(result => {
        return result.json();
      })
      .catch(error => {
        return error
      })
  }
}