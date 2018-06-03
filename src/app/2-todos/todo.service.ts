import { Injectable } from '@angular/core'; 
import { Http } from '@angular/http';
//import 'rxjs/add/operator/map';
import { map} from 'rxjs/operators';
import {from}  from 'rxjs';

@Injectable()
export class TodoService { 
  constructor(private http: Http) { 
  }

  add(todo) {
    return this.http.post('...', todo)//.map(r => r.json());
     .pipe(map(r=> r.json()));
    
  }

  getTodos() { 
    return this.http.get('...')//.map(r => r.json());
    .pipe(map(r=> r.json()));
    /*return from( [
      {id:1, nombre:'n1'},
      {id:2, nombre:'n2'},
      {id:3, nombre:'n3'}
    ]);*/
  }

  delete(id) {
    return this.http.delete('...')//.map(r => r.json());
    .pipe(map(r=> r.json()));
  }
}