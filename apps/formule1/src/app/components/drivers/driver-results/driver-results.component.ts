import { Component, Input, OnChanges } from '@angular/core';
import { IDriver } from '../../../interfaces/driver';
import { IRaceItem } from '../../../interfaces/race';
import { DriverService } from '../../../services/api/driver.service';

@Component({
  selector: 'f1-driver-results',
  templateUrl: './driver-results.component.html',
  styleUrls: ['./driver-results.component.scss']
})
export class DriverResultsComponent implements OnChanges {
  @Input() driver!: IDriver;

  public wins: IRaceItem[] = [];
  public podiums: IRaceItem[] = [];
  public points: IRaceItem[] = [];

  public lastFiveWins: IRaceItem[] = [];
  public lastFivePodiums: IRaceItem[] = [];
  public lastFivePoints: IRaceItem[] = [];

  public loading = false;

  constructor(private driverService: DriverService) { }

  ngOnChanges(): void {
    this.getDriverParam();
  }

  public limitToFiveAndReverse(races: IRaceItem[]) {
    const reversed = Array.from(races).reverse();
    return reversed.slice(0, 5);
  }

  private getDriverParam() {
    if (this.driver) {
      this.getDriver(this.driver);
    }
  }

  private getDriver(driver: IDriver) {
    this.loading = true;
    this.driverService.getDriverResults(driver.driverId).subscribe((data: IRaceItem[]) => {
      console.log('race data', data);

      const wins: IRaceItem[] = [];
      const podiums: IRaceItem[] = [];
      const points: IRaceItem[] = [];

      data.forEach(race => {
        const result = race.Results[0]; // only 1 result for this query;
        if (result.position === '1') {
          wins.push(race);
          podiums.push(race);
          points.push(race);
        }
        else if (result.position === '2' || result.position === '3') {
          podiums.push(race);
          points.push(race);
        }
        else if (result.points !== '0') {
          points.push(race);
        }
      });

      this.wins = wins;
      this.podiums = podiums;
      this.points = points;

      this.lastFiveWins = this.limitToFiveAndReverse(wins);
      this.lastFivePodiums = this.limitToFiveAndReverse(podiums);
      this.lastFivePoints = this.limitToFiveAndReverse(points);

      this.loading = false;
    });
  }
}
