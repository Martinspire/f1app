import { Component, OnInit } from '@angular/core';
import { ICircuitItem } from '../../../interfaces/circuit';
import { CircuitService } from '../../../services/circuit.service';

@Component({
  selector: 'f1-circuit-list',
  templateUrl: './circuit-list.component.html',
  styleUrls: ['./circuit-list.component.scss']
})
export class CircuitListComponent implements OnInit {

public circuits: ICircuitItem[] = [];

public loading = false;

constructor(private circuitService: CircuitService) { }

ngOnInit(): void {
  this.getAllCircuits();
}

private getAllCircuits() {
  this.loading = true;
  this.circuitService.getAllCircuits().subscribe((data: ICircuitItem[]) => {
    console.log('circuits data', data);
    data.forEach(circuit => {
      console.log(circuit.circuitId + ' - ' + circuit.circuitName + ' - ' + circuit.Location.country);
    })
    this.circuits = data;
    this.loading = false;
  });
}
}
