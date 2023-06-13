import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'f1-race-compare-feature',
  templateUrl: './race-compare-feature.component.html',
  styleUrls: ['./race-compare-feature.component.scss']
})
export class RaceCompareFeatureComponent implements OnInit{

  public season = '';
  public round = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.season = params['season'];
      this.round = params['round'];
    })
  }
}
