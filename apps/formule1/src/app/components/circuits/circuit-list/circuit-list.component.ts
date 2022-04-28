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

constructor(private circuitService: CircuitService) { }

ngOnInit(): void {
  this.getAllSeasons();
}

private getAllSeasons() {
  this.circuitService.getAllCircuits().subscribe((data: ICircuitItem[]) => {
    console.log('driver data', data);
    this.circuits = data;
  });
}
}
