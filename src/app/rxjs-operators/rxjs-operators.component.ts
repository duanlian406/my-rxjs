import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.css']
})
export class RxjsOperatorsComponent implements OnInit {
  fn = function map(project) {
    return new Observable(observer => {
      const sub = this.subscribe({
        next: value => observer.next(project(value)),
        error: err => observer.error(err),
        complete: () => observer.complete(),
      });
      return {
        unsubscribe: () => {
          sub.unsubscribe();
        }
      };
    });
  }.toString();
  constructor() { }

  ngOnInit() {
  }

}
