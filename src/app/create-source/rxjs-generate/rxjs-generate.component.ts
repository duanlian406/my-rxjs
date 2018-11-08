import { Component, OnInit } from '@angular/core';
import { generate, interval, defer, of, } from 'rxjs';
import { toArray, repeatWhen, delay, take } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-generate',
  templateUrl: './rxjs-generate.component.html',
  styleUrls: ['./rxjs-generate.component.css']
})
export class RxjsGenerateComponent implements OnInit {
  source$;
  repeat$;
  defer$;
  constructor() { }

  ngOnInit() {
    this.source$ = generate('a'.charCodeAt(0), v => v <= 'z'.charCodeAt(0), v => v + 1, v => String.fromCharCode(v)).pipe(toArray());
    this.repeat$ = this.source$.pipe(repeatWhen(n => n.pipe(delay(2000))));
    this.defer$ = defer(() => of([1, 2, 3]));
  }

}
