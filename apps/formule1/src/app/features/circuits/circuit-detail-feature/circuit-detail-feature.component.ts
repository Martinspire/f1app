import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'f1-circuit-detail-feature',
  templateUrl: './circuit-detail-feature.component.html',
  styleUrls: ['./circuit-detail-feature.component.scss']
})
export class CircuitDetailFeatureComponent implements OnInit {

  public circuit = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.circuit = params['circuit'];
    })
  }

}
