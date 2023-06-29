import { Component, Input } from '@angular/core';

@Component({
  selector: 'f1-season-detail-feature',
  templateUrl: './season-detail-feature.component.html',
  styleUrls: ['./season-detail-feature.component.scss']
})
export class SeasonDetailFeatureComponent {

  @Input() season = '';

}
