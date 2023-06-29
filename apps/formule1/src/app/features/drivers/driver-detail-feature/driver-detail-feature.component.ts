import { Component, Input } from '@angular/core';

@Component({
  selector: 'f1-driver-detail-feature',
  templateUrl: './driver-detail-feature.component.html',
  styleUrls: ['./driver-detail-feature.component.scss']
})
export class DriverDetailFeatureComponent {

  @Input() driver = '';
}
