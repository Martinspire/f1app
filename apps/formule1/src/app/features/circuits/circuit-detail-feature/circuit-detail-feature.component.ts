import { Component, Input } from '@angular/core';

@Component({
  selector: 'f1-circuit-detail-feature',
  templateUrl: './circuit-detail-feature.component.html',
  styleUrls: ['./circuit-detail-feature.component.scss']
})
export class CircuitDetailFeatureComponent {

  @Input() circuit = '';
}
