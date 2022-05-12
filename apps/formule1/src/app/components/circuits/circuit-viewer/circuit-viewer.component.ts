import { ICircuitItem } from './../../../interfaces/circuit';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'f1-circuit-viewer',
  templateUrl: './circuit-viewer.component.html',
  styleUrls: ['./circuit-viewer.component.scss'],
})
export class CircuitViewerComponent {
  @Input() circuit!: ICircuitItem;

  public assets = 'assets/models/';
  public extension = '.stl';
}
