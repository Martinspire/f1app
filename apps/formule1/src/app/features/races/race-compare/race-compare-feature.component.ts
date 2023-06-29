import { Component, Input } from '@angular/core';

@Component({
  selector: 'f1-race-compare-feature',
  templateUrl: './race-compare-feature.component.html',
  styleUrls: ['./race-compare-feature.component.scss']
})
export class RaceCompareFeatureComponent {

  @Input() season = '';
  @Input() round = '';
}
