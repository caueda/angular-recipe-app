import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.subscription = interval(1000).subscribe((next) => {
      console.log(next);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
