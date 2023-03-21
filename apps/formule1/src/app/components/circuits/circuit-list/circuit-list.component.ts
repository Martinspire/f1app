import { Component, OnInit } from '@angular/core';
import { ICircuitItem } from '../../../interfaces/circuit';
import { CircuitService } from '../../../services/api/circuit.service';

@Component({
  selector: 'f1-circuit-list',
  templateUrl: './circuit-list.component.html',
  styleUrls: ['./circuit-list.component.scss']
})
export class CircuitListComponent implements OnInit {

  public circuits: ICircuitItem[] = [];
  public filteredCircuits: ICircuitItem[] = [];

  public nameFilter = '';
  public countryFilter = '';

  public loading = false;

  constructor(private circuitService: CircuitService) { }

  ngOnInit(): void {
    this.getAllCircuits();
  }

  private getAllCircuits() {
    this.loading = true;
    this.circuitService.getAllCircuits().subscribe((data: ICircuitItem[]) => {
      console.log('circuits data', data);
      this.circuits = data;
      this.applyFilters();
      this.loading = false;
    });
  }

  public applyFilters() {
    this.filteredCircuits = this.circuits.filter(circuit => {
      if (
        circuit &&
        circuit.circuitName.toLowerCase().indexOf(this.nameFilter.toLowerCase()) > -1 &&
        circuit.Location.country.toLowerCase().indexOf(this.countryFilter.toLowerCase()) > -1
      ) {
        return true;
      } else {
        return false;
      }
    });
  }

  public resetFilters() {
    this.nameFilter = '';
    this.countryFilter = '';
  }
}
