import { Component, Input } from '@angular/core';

@Component({
  selector: 'f1-race-detail-feature',
  templateUrl: './race-detail-feature.component.html',
  styleUrls: ['./race-detail-feature.component.scss']
})
export class RaceDetailFeatureComponent {

  @Input() season = '';
  @Input() round = '';
}
