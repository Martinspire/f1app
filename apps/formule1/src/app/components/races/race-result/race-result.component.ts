import { Component, Input } from '@angular/core';
import { IRaceItem } from '../../../interfaces/race';

@Component({
  selector: 'f1-race-result',
  templateUrl: './race-result.component.html',
  styleUrls: ['./race-result.component.scss']
})
export class RaceResultComponent {
  @Input() race!: IRaceItem;
}
