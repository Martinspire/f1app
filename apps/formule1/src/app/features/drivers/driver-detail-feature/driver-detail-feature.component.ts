import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'f1-driver-detail-feature',
  templateUrl: './driver-detail-feature.component.html',
  styleUrls: ['./driver-detail-feature.component.scss']
})
export class DriverDetailFeatureComponent implements OnInit {

  public driver = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.driver = params['driver'];
    })
  }

}
