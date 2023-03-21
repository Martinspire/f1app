import { Component, OnInit } from '@angular/core';
import { IDriver } from '../../../interfaces/driver';
import { DriverService } from '../../../services/api/driver.service';

@Component({
  selector: 'f1-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.scss']
})
export class DriversListComponent implements OnInit {

  public drivers: IDriver[] = [];
  public filteredDrivers: IDriver[] = [];

  public givenFilter = '';
  public familyFilter = '';
  public dateFilter = '';
  public nationalityFilter = '';

  public loading = false;

  constructor(private driverService: DriverService) { }

  ngOnInit(): void {
    this.getDrivers();
  }

  private getDrivers() {
    this.loading = true;
    this.driverService.getAllDrivers().subscribe((data: IDriver[]) => {
      console.log('driver data', data);
      this.drivers = data;
      this.applyFilters();
      this.loading = false;
    });
  }

  public applyFilters() {
    this.filteredDrivers = this.drivers.filter(driver => {
      if (
        driver &&
        driver.givenName.toLowerCase().indexOf(this.givenFilter.toLowerCase()) > -1 &&
        driver.familyName.toLowerCase().indexOf(this.familyFilter.toLowerCase()) > -1 &&
        driver.dateOfBirth.toLowerCase().indexOf(this.dateFilter.toLowerCase()) > -1 &&
        driver.nationality.toLowerCase().indexOf(this.nationalityFilter.toLowerCase()) > -1
      ) {
        return true;
      } else {
        return false;
      }
    });
  }

  public resetFilters() {
    this.givenFilter = '';
    this.familyFilter = '';
    this.dateFilter = '';
    this.nationalityFilter = '';
  }
}
