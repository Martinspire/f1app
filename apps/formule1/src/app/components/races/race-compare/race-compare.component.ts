import { Component, Input, OnChanges } from '@angular/core';
import { IDriver } from '../../../interfaces/driver';
import { ILap } from '../../../interfaces/laptimes';
import { IRaceItem, IRaceResult } from '../../../interfaces/race';
import { RaceService } from '../../../services/api/race.service';

interface IDriverLaptimes {
  [key: string]: ILap[];
}

@Component({
  selector: 'f1-race-compare',
  templateUrl: './race-compare.component.html',
  styleUrls: ['./race-compare.component.scss']
})
export class RaceCompareComponent implements OnChanges{
  @Input() season = '';
  @Input() round = '';
  @Input() raceInput!: IRaceItem;
  @Input() driversInput!: IDriver[];

  public race!: IRaceItem;
  public drivers!: IDriver[];
  public driverLaptimes: IDriverLaptimes = {};
  public selectedDrivers: IDriver[] = [];
  public laps: number[] = [];

  public loading = false;
  public driverLoading = false;
  public error = false;
  public showTable = false;

  constructor(private raceService: RaceService) { }

  ngOnChanges(): void {
    this.getRaceParams();
  }

  private getRaceParams() {
    if (!this.raceInput) {
      this.getRace(this.season, this.round);
    } else {
      this.race = this.raceInput;
      this.setDrivers();
      this.setLaps();
    }
  }

  private getRace(season: string, round: string) {
    this.error = false;
    this.loading = true;
    this.raceService.getRaceResult(season, round).subscribe({
      next: (data: IRaceItem) => {
        console.log('race data', data);
        this.race = data;
        this.setDrivers();
        this.setLaps();
        this.loading = false;
      },
      error: (error) => {
        console.log('error', error);
        this.error = true;
        this.loading = false;
      }
    });
  }

  private setDrivers() {
    this.drivers = this.race?.Results.map((result: IRaceResult) => result.Driver);
  }

  private setLaps() {
    this.laps = Array.from(Array(Number(this.race?.Results[0]?.laps)).keys())
  }

  selectDriver(driver: IDriver): void {
    if (!this.haveDriver(driver)) {
      if (!this.driverLaptimes[driver.driverId]) {
        this.getLapsFromDriver(this.season, this.round, driver);
      }
      this.selectedDrivers.push(driver);
    }
    this.showTable = true;
  }

  private getDriverIndex(driver: IDriver) {
    return this.selectedDrivers.findIndex((selectedDriver) => selectedDriver.driverId === driver.driverId);
  }

  haveDriver(driver: IDriver): boolean {
    return this.getDriverIndex(driver) > -1;
  }

  toggleDriver(driver: IDriver): void {
    this.haveDriver(driver) ? this.removeDriver(driver) : this.selectDriver(driver);
  }

  removeDriver(driver: IDriver) {
    if (this.haveDriver(driver)) {
      this.selectedDrivers.splice(this.getDriverIndex(driver), 1);
    }
    if (this.selectedDrivers.length === 0) {
      this.showTable = false;
    }
  }

  clearDrivers() {
    this.selectedDrivers = [];
    this.showTable = false;
  }

  compare(lapIndex: number | undefined, time: string | undefined): string {
    let result = '';
    if (lapIndex && time) {
      const comparedTime = this.convertLaptime(time);
      const compareLaps: number[] = [];
      this.selectedDrivers.forEach(selectedDriver => {
        if (
          this.driverLaptimes[selectedDriver.driverId] &&
          this.driverLaptimes[selectedDriver.driverId][lapIndex] &&
          this.driverLaptimes[selectedDriver.driverId][lapIndex].Timings &&
          this.driverLaptimes[selectedDriver.driverId][lapIndex]?.Timings[0] &&
          this.driverLaptimes[selectedDriver.driverId][lapIndex]?.Timings[0]?.time
        ) {
          const lap = this.driverLaptimes[selectedDriver.driverId][lapIndex]?.Timings[0]?.time;
          compareLaps.push(this.convertLaptime(lap));
        }
      });

      const findFastest = Math.min(...compareLaps);
      const findSlowest = Math.max(...compareLaps);

      console.log('fast en slow', findFastest, findSlowest, compareLaps);

      if (findFastest === comparedTime && findSlowest === comparedTime) {
        //
      } else if (findFastest === comparedTime) {
        result = 'fastest';
      } else if (findSlowest === comparedTime) {
        result = 'slowest';
      }

    }
    console.log('result', lapIndex, time, result);
    return result;
  }

  convertLaptime(lap: string): number {
    let time = 0;
    const splittedTime = lap.split(':');
    if (splittedTime.length > 2) {
      console.log('error length');
    } else if (splittedTime.length == 2) {
      const end = Number(splittedTime[1]) * 1000; // multiply by 1000 to prevent floating point annoyances
      time = (Number(splittedTime[0]) * 60000) + end;
    }
    else if (splittedTime.length == 1){
      time = Number(splittedTime[0]);
    }

    return time;
  }

  driverNoLaps(driver: IDriver) {
    if (this.race?.Results) {
      return this.race.Results.find(result => result.Driver.driverId === driver.driverId && result.laps === '0');
    }
    return true;
  }

  driverDNF(driver: IDriver) {
    if (this.race?.Results) {
      return this.race.Results.find(
        result =>
          result.Driver.driverId === driver.driverId &&
          result.status !== 'Finished' &&
          result.status[0] !== '+' &&
          result.laps !== '0'
      );
    }
    return true;
  }

  private getLapsFromDriver(season: string, round: string, driver: IDriver) {
    this.error = false;
    this.driverLoading = true;
    this.raceService.getLapsByDriver(season, round, driver).subscribe({
      next: (data: ILap[]) => {
        console.log('laps data', data);
        this.driverLaptimes[driver.driverId] = data;
        this.driverLoading = false;
      },
      error: (error) => {
        console.log('error', error);
        this.error = true;
        this.driverLoading = false;
      }
    });
  }

}
