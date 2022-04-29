import { Component, Input, OnChanges } from '@angular/core';
import { ICircuitItem } from './../../../interfaces/circuit';
import { CircuitService } from './../../../services/circuit.service';

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
    this.getDriverParam();
  }

  private getDriverParam() {
    if (this.circuitId) {
      this.getDriver(this.circuitId);
    }
  }

  private getDriver(circuitId: string) {
    this.loading = true;
    this.circuitService.getCircuit(circuitId).subscribe((data: ICircuitItem) => {
      console.log('driver data', data);
      this.circuit = data;
      this.loading = false;
    });
  }
}
