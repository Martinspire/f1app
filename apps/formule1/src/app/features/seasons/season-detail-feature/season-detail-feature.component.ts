import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'f1-season-detail-feature',
  templateUrl: './season-detail-feature.component.html',
  styleUrls: ['./season-detail-feature.component.scss']
})
export class SeasonDetailFeatureComponent implements OnInit {

  public season = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.season = params['season'];
    })
  }

}
