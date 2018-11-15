import { Component, OnInit } from '@angular/core';
import { timer, of } from 'rxjs';
import { take, map, catchError, delay, retry, retryWhen, scan, delayWhen } from 'rxjs/operators';

@Component({
  selector: 'app-error-operators',
  templateUrl: './error-operators.component.html',
  styleUrls: ['./error-operators.component.css']
})
export class ErrorOperatorsComponent implements OnInit {
  catch$;
  retry$;
  retryWhen$;
  constructor() { }

  ngOnInit() {
    this.catch$ = timer(0, 500).pipe(take(10), map(v => {
      if (v > 5) {
        throw new Error('can\'t more than five');
      }
      return v;
    }), catchError((err, ob) => {
      return ob.pipe(delay(1000));
    }), take(15));
    this.retry$ = timer(0, 500).pipe(
      take(10),
      map(v => {
        if (v > 5) {
          throw new Error('can\'t more than five');
        }
        return v;
      }),
      retry(2),
      catchError((err, ob) => {
        return of('abc');
      })
    );
    this.retryWhen$ = timer(0, 500).pipe(
      map(v => {
        if (v > 4) {
          throw new Error('can\'t more than five');
        }
        return v;
      }),
      retryWhen(err$ => err$.pipe(
        scan((acc, cur) => {
          if (acc > 3) {
            throw new Error('can\'t more than five');
          }
          return ++acc;
        }, 0),
        delayWhen(v => timer(v * 1000))
      )),
      catchError((err, ob) => of('abc'))
    );
  }
}
