import { Component, Input, OnChanges } from '@angular/core';
import { ICircuitItem } from './../../../interfaces/circuit';
import { CircuitService } from './../../../services/api/circuit.service';

@Component({
  selector: 'f1-circuit-detail',
  templateUrl: './circuit-detail.component.html',
  styleUrls: ['./circuit-detail.component.scss']
})
export class CircuitDetailComponent implements OnChanges {
  @Input() circuitId = '';

  public circuit!: ICircuitItem;

  public loading = false;

  constructor(private circuitService: CircuitService) { }

  ngOnChanges(): void {
    this.getCircuitParam();
  }

  private getCircuitParam() {
    if (this.circuitId) {
      this.getCircuit(this.circuitId);
    }
  }

  private getCircuit(circuitId: string) {
    this.loading = true;
    this.circuitService.getCircuit(circuitId).subscribe((data: ICircuitItem) => {
      console.log('circuit data', data);
      this.circuit = data;
      this.loading = false;
    });
  }
}
