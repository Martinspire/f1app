import { Component, Input, NgZone, OnDestroy } from '@angular/core';
import { CountdownType } from '../../../constants/app.enums';

@Component({
  selector: 'f1-next-countdown',
  templateUrl: './next-countdown.component.html',
  styleUrls: ['./next-countdown.component.scss']
})
export class NextCountdownComponent implements OnDestroy {
  public activeInterval!: number;
  public interval = 0;
  public years = 0;
  public months = 0;
  public days = 0;
  public hours = 0;
  public minutes = 0;
  public seconds = 0;
  public expired = false;

  @Input() type: CountdownType = CountdownType.Medium;
  @Input() set date(d: Date) {
    this.interval = d.getTime();
    this.setDate();
  }

  constructor(
    private ngZone: NgZone
  ) { }

  ngOnDestroy(): void {
    clearInterval(this.activeInterval);
  }

  public setDate() {
    if (this.interval) {
      this.activeInterval = window.setInterval(() => {
        this.ngZone.run(() => this.tick());
      }, 1000);
    }
  }

  public tick() {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = this.interval - now;

    // Time calculations for days, hours, minutes and seconds
    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

    this.years = Math.floor(this.days / 365);
    this.months = Math.floor(this.days / 30); // good enough. Probably. Will check again in offseason lol

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(this.activeInterval);
      this.expired = true;
    }
    // console.log('tick', this);
  }
}
