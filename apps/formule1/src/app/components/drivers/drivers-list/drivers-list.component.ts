import {Component, OnInit} from '@angular/core';
import {DriverService} from '../../../services/driver.service';
import {IDriver} from '../../../interfaces/driver';

@Component({
  selector: 'f1-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.scss']
})
export class DriversListComponent implements OnInit {

  public drivers: IDriver[] = [];

  constructor(private driverService: DriverService) { }

  ngOnInit(): void {
    this.getDrivers();
  }

  private getDrivers() {
    this.driverService.getAllDrivers().subscribe((data: IDriver[]) => {
      console.log('driver data', data);
      this.drivers = data;
    });
  }
}
