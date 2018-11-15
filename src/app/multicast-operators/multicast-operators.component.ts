import { Component, OnInit } from '@angular/core';
import { timer, Subject, from } from 'rxjs';
import { take, multicast, refCount, publish, share, publishLast, publishReplay, publishBehavior } from 'rxjs/operators';

@Component({
  selector: 'app-multicast-operators',
  templateUrl: './multicast-operators.component.html',
  styleUrls: ['./multicast-operators.component.css']
})
export class MulticastOperatorsComponent implements OnInit {
  source$ = timer(500, 500);
  refCount$;
  connect$;
  publish$;
  share$;
  publishLast$;
  publishReplay$;
  publishBehavior$;
  constructor() { }

  ngOnInit() {
    this.connect$ = this.source$.pipe(take(5), multicast(new Subject()));
    this.connect$.connect();
    this.refCount$ = this.source$.pipe(take(5), multicast(() => new Subject()), refCount());
    setTimeout(() => this.refCount$.subscribe(console.log), 4000);
    this.publish$ = this.source$.pipe(take(5), publish(), refCount());
    setTimeout(() => this.publish$.subscribe(console.log), 4000);
    this.share$ = this.source$.pipe(take(10), share());
    setTimeout(() => this.share$.subscribe(console.log), 6000);
    this.publishLast$ = this.source$.pipe(take(3), publishLast(), refCount());
    setTimeout(() => this.publishLast$.subscribe(console.log), 3000);
    this.publishReplay$ = from(['a', 'b', 'c', 'd', 'e']).pipe(publishReplay(2), refCount());
    setTimeout(() => this.publishReplay$.subscribe(console.log), 3000);
    this.publishBehavior$ = timer(1000, 500).pipe(take(4), publishBehavior(-1), refCount());
    setTimeout(() => this.publishBehavior$.subscribe(console.log, null, () => console.log('complete')), 6000);
  }

}
