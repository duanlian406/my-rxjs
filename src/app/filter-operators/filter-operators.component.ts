import { Component, OnInit } from '@angular/core';
import { from, timer, interval, fromEvent } from 'rxjs';
// tslint:disable-next-line:max-line-length
import { filter, toArray, first, last, take, takeLast, takeUntil, takeWhile, skip, skipUntil, skipWhile, throttleTime, debounceTime, scan, mapTo, throttle, debounce, audit, auditTime, sample, sampleTime, map, distinct, distinctUntilChanged, elementAt, single } from 'rxjs/operators';

@Component({
  selector: 'app-filter-operators',
  templateUrl: './filter-operators.component.html',
  styleUrls: ['./filter-operators.component.css']
})
export class FilterOperatorsComponent implements OnInit {
  source$ = from([1, 2, 3, 4, 5, 6]);
  filter$;
  first$;
  last$;
  take$;
  takeLast$;
  takeUntil$;
  takeWhile$;
  skip$;
  skipUntil$;
  skipWhile$;
  debounceTime$;
  throttleTime$;
  debounce$;
  throttle$;
  auditTime$;
  audit$;
  sampleTime$;
  sample$;
  distinct$;
  distinctUntilChanged$;
  data$;
  elementAt$;
  single$;
  constructor() { }

  ngOnInit() {
    this.filter$ = this.source$.pipe(filter((v, i) => i > 1 && v % 2), toArray());
    this.first$ = this.source$.pipe(first(v => v > 6, -1));
    this.last$ = this.source$.pipe(last(v => v % 2, -1));
    this.take$ = this.source$.pipe(take(2), toArray());
    this.takeLast$ = this.source$.pipe(takeLast(2), toArray());
    this.takeUntil$ = interval(500).pipe(takeUntil(timer(2000)));
    this.takeWhile$ = interval(500).pipe(takeWhile((v) => v < 3));
    this.skip$ = interval(500).pipe(skip(3), take(3));
    this.skipUntil$ = interval(500).pipe(skipUntil(timer(1500)), take(3));
    this.skipWhile$ = interval(500).pipe(skipWhile(v => v % 2), take(3));
    // tslint:disable-next-line:max-line-length
    this.throttleTime$ = fromEvent(document.querySelector('#btn_1'), 'click').pipe(throttleTime(1000), mapTo(1), scan((acc, cur) => acc + cur, 0));
    // tslint:disable-next-line:max-line-length
    this.debounceTime$ = fromEvent(document.querySelector('#btn_2'), 'click').pipe(debounceTime(1000), mapTo(1), scan((acc, cur) => acc + cur, 0));
    this.throttle$ = interval(1000).pipe(throttle(v => timer(v % 3 ? 1000 : 2000)), take(10));
    this.debounce$ = interval(1000).pipe(debounce(v => timer(v % 3 ? 1000 : 2000)), take(10));
    this.auditTime$ = interval(1000).pipe(auditTime(2000), take(10));
    this.audit$ = interval(500).pipe(audit(v => timer(v % 2 ? 500 : 1000)), take(10), toArray());
    this.sampleTime$ = interval(500).pipe(sampleTime(1000), take(10), toArray());
    // tslint:disable-next-line:max-line-length
    this.sample$ = timer(0, 100).pipe(map(v => v / 10), sample(fromEvent(document.querySelector('#btn_3'), 'click')), map(v => v.toFixed(2)));
    this.data$ = from([{ name: 'aa', age: 11 }, { name: 'bb', age: 15 }, { name: 'aa', age: 14 }, { name: 'cc', age: 15 }]);
    this.distinct$ = this.data$.pipe(distinct(item => item.name, interval(2000)), toArray());
    this.distinctUntilChanged$ = from([1, 2, 2, 3, 1, 2, 1, 1, 2]).pipe(distinctUntilChanged((a, b) => a === b), toArray());
    this.elementAt$ = interval(1000).pipe(take(3), elementAt(3, 3));
    this.single$ = interval(1000).pipe(single(v => v % 2));
    this.single$.subscribe(null, console.log);
  }

}
