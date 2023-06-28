import { Component, Input, OnChanges } from '@angular/core';
import { CircleMarker, LatLngExpression, MapOptions, circleMarker, latLng, tileLayer } from 'leaflet';
import { AppConstant } from '../../../constants/app.constants';
import { ISeasonRaceItem } from '../../../interfaces/season';

@Component({
  selector: 'f1-season-map',
  templateUrl: './season-map.component.html',
  styleUrls: ['./season-map.component.scss']
})
export class SeasonMapComponent implements OnChanges {

  @Input() races: ISeasonRaceItem[] = [];

  public options!: MapOptions;
  public raceMarker: CircleMarker[] = [];
  public map !: L.Map;
  public loaded = false;

  private mapProvider = AppConstant.mapProvider;

  constructor() {
    this.options = {
      layers: [
        tileLayer(this.mapProvider, {
          maxZoom: 18,
          noWrap: false,
          attribution: '...'
        })
      ],
      zoom: 1.5,
      center: latLng(0, 0)
    };
    //
  }

  ngOnChanges(): void {
    this.getSeasonMap();
  }

  onMapReady(map: L.Map) {
    this.map = map;

    // const bounds = latLngBounds([[85, 180],[-85, -180]]);
    // const wantedZoom = this.map.getBoundsZoom(bounds, true);
    // const center = bounds.getCenter();
    // this.map.setView(center, wantedZoom);
  }

  showPopup(race: ISeasonRaceItem, position: LatLngExpression) {
    this.map.openPopup(`${race.round} - ${race.raceName} - ${race.Circuit.Location.country}`, position);
  }

  private getSeasonMap() {
    if (this.races && this.races.length > 0) {
      this.races.forEach(race => {
        const position: LatLngExpression = [
          Number(race.Circuit.Location.lat),
          Number(race.Circuit.Location.long)
        ];
        const raceMarker = circleMarker(position).on('click', () => { this.showPopup(race, position); });
        this.raceMarker.push(
          raceMarker
        );
      });
      this.loaded = true;
    }
  }
}
