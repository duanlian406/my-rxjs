import { Component, OnInit } from '@angular/core';
import { from, of, fromEvent, timer } from 'rxjs';
// tslint:disable-next-line:max-line-length
import { map, mapTo, toArray, pluck, windowTime, filter, take, concatAll, bufferTime, windowCount, bufferCount, windowWhen, bufferWhen, windowToggle, bufferToggle, window, mergeAll, buffer, concatMap, mergeMap, switchMap, exhaustMap, groupBy, reduce, scan, combineAll, partition } from 'rxjs/operators';

@Component({
  selector: 'app-transform-operators',
  templateUrl: './transform-operators.component.html',
  styleUrls: ['./transform-operators.component.css']
})
export class TransformOperatorsComponent implements OnInit {
  source$;
  data$;
  map$;
  mapTo$;
  pluck$;
  windowTime$;
  bufferTime$;
  windowCount$;
  bufferCount$;
  windowWhen$;
  bufferWhen$;
  windowToggle$;
  bufferToggle$;
  window$;
  buffer$;
  concatMap$;
  mergeMap$;
  switchMap$;
  exhaustMap$;
  click$;
  groupBy$;
  even$;
  odd$;
  scan$;
  constructor() { }

  ngOnInit() {
    this.source$ = from([1, 2, 3, 4, 5]);
    this.map$ = this.source$.pipe(map(function (v, i) { return `${i}${this.s}${v}`; }, { s: '#' }), toArray());
    this.mapTo$ = this.source$.pipe(mapTo('a'), toArray());
    this.pluck$ = fromEvent(document, 'click').pipe(pluck('target', 'tagName'));
    this.windowTime$ = timer(0, 500).pipe(take(20), windowTime(1000, 2000), concatAll());
    this.bufferTime$ = timer(0, 300).pipe(take(20), bufferTime(1000, 2000, 3));
    this.windowCount$ = timer(0, 500).pipe(take(20), windowCount(3, 4), concatAll());
    this.bufferCount$ = timer(0, 300).pipe(take(20), bufferCount(4, 5));
    this.windowWhen$ = timer(0, 300).pipe(take(20), windowWhen(() => fromEvent(document, 'click')), concatAll());
    this.bufferWhen$ = timer(0, 300).pipe(take(20), bufferWhen(() => fromEvent(document, 'click')));
    // tslint:disable-next-line:max-line-length
    this.windowToggle$ = timer(0, 500).pipe(take(20), windowToggle(fromEvent(document, 'click'), v => fromEvent(document, 'contextmenu')), concatAll());
    this.bufferToggle$ = timer(0, 500).pipe(
      take(30),
      bufferToggle(
        fromEvent(document, 'keydown').pipe(
          pluck('keyCode'),
          filter(c => c === 37)
        ),
        v => fromEvent(document, 'keydown').pipe(
          pluck('keyCode'),
          filter(c => c === 39)
        )
      )
    );
    this.window$ = timer(0, 500).pipe(window(timer(2000)), mergeAll());
    this.buffer$ = timer(0, 300).pipe(buffer(fromEvent(document, 'click').pipe(take(3))));
    this.click$ = timer(200, 500).pipe(take(5));
    this.concatMap$ = fromEvent(document, 'click').pipe(concatMap(v => this.click$));
    this.mergeMap$ = fromEvent(document, 'click').pipe(mergeMap(v => this.click$));
    this.switchMap$ = fromEvent(document, 'click').pipe(switchMap(v => this.click$));
    this.exhaustMap$ = fromEvent(document, 'click').pipe(exhaustMap(v => this.click$));
    // tslint:disable-next-line:max-line-length
    this.groupBy$ = fromEvent(document, 'keydown').pipe(
      pluck('keyCode'),
      groupBy(k => k),
      filter(group => group.key >= 37 && group.key <= 40),
      mergeMap(group => group.pipe(scan((acc, cur) => ({ [group.key]: ++acc[group.key] }), { [group.key]: 0 }))),
      scan((acc, cur) => ({ ...acc, ...cur }), {})
    );
    [this.odd$, this.even$] = timer(0, 500).pipe(take(10), partition(v => v % 2));
    this.scan$ = from('abcbdcabdsdsscdb').pipe(
      scan((acc, cur) => (acc[cur] ? acc[cur]++ : acc[cur] = 1, acc), {})
    );
  }

}
