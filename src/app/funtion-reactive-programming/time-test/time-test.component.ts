import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { fromEvent, BehaviorSubject } from 'rxjs';
import { zip, map, scan } from 'rxjs/operators';

@Component({
  selector: 'app-time-test',
  templateUrl: './time-test.component.html',
  styleUrls: ['./time-test.component.css']
})
export class TimeTestComponent implements OnInit, AfterViewInit {
  @ViewChild('btn') btn;
  down$;
  up$;
  msg$;
  hint$ = new BehaviorSubject('按住我一秒钟然后松手');
  score$;
  constructor() { }
  ngAfterViewInit() {
    this.btn = this.btn.nativeElement;
    this.down$ = fromEvent(this.btn, 'mousedown');
    this.up$ = fromEvent(this.btn, 'mouseup');
    this.msg$ = this.down$.pipe(
      zip(this.up$, (d, u) => (u.timeStamp - d.timeStamp) / 1000),
      map(v => v.toFixed(3))
    );
    this.score$ = this.msg$.pipe(scan((acc, cur) => [...acc, cur], []), map(arr => arr.sort((a, b) => {
      const m = Math.abs(a - 1);
      const n = Math.abs(b - 1);
      return m - n;
    }).slice(0, 10)));
  }
  ngOnInit() {
  }

}
