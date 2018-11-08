import { Component, OnInit } from '@angular/core';
import { of, from, empty, never, throwError } from 'rxjs';
import { count, min, max, find, findIndex, reduce, map, isEmpty, defaultIfEmpty, every } from 'rxjs/operators';

@Component({
  selector: 'app-assist-operators',
  templateUrl: './assist-operators.component.html',
  styleUrls: ['./assist-operators.component.css']
})
export class AssistOperatorsComponent implements OnInit {
  source$ = of(1, 3, 2, 4, 6, 5);
  data$ = from([{ name: 'abc', age: 4 }, { name: 'cde', age: 6 }, { name: 'bbb', age: 16 }]);
  count$;
  min$;
  max$;
  find$;
  findIndex$;
  reduce$;
  isEmpty$;
  defaultIfEmpty$;
  every$;
  constructor() { }

  ngOnInit() {
    this.count$ = this.source$.pipe(count());
    this.min$ = this.source$.pipe(min((a, b) => a - b));
    this.max$ = this.source$.pipe(max());
    this.find$ = this.data$.pipe(find(item => item.age > 4));
    this.findIndex$ = this.data$.pipe(findIndex(item => item.age > 6));
    // tslint:disable-next-line:max-line-length
    this.reduce$ = this.data$.pipe(reduce((acc, cur) => ({ count: ++acc.count, age: acc.age + cur.age }), { count: 0, age: 0 }), map(o => o.age / o.count));
    this.isEmpty$ = empty().pipe(isEmpty());
    this.defaultIfEmpty$ = empty().pipe(defaultIfEmpty('123'));
    this.every$ = this.source$.pipe(every(item => item % 2));
  }

}
