import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'f1-race-detail-feature',
  templateUrl: './race-detail-feature.component.html',
  styleUrls: ['./race-detail-feature.component.scss']
})
export class RaceDetailFeatureComponent implements OnInit{

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