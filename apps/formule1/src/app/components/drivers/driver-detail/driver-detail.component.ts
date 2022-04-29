import { IDriver } from './../../../interfaces/driver';
import { Component, Input, OnChanges } from '@angular/core';
import { DriverService } from './../../../services/driver.service';

@Component({
  selector: 'f1-driver-detail',
  templateUrl: './driver-detail.component.html',
  styleUrls: ['./driver-detail.component.scss']
})
export class DriverDetailComponent implements OnChanges {
  @Input() driverId = '';

  public driver!: IDriver;

  public loading = false;

  constructor(private driverService: DriverService) { }

  ngOnChanges(): void {
    this.getDriverParam();
  }

  private getDriverParam() {
    if (this.driverId) {
      this.getDriver(this.driverId);
    }
  }

  private getDriver(driverId: string) {
    this.loading = true;
    this.driverService.getDriver(driverId).subscribe((data: IDriver) => {
      console.log('driver data', data);
      this.driver = data;
      this.loading = false;
    });
  }
}
