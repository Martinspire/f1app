import {Component, Input, OnChanges} from '@angular/core';
import {CircleMarker, circleMarker, latLng, tileLayer, MapOptions, latLngBounds, LatLngExpression} from 'leaflet';
import {AppConstant} from '../../../constants/app.constants';
import {ISeasonRaceItem} from '../../../interfaces/season';

@Component({
  selector: 'f1-season-map',
  templateUrl: './season-map.component.html',
  styleUrls: ['./season-map.component.scss']
})
export class SeasonMapComponent implements OnChanges {

  @Input() races: ISeasonRaceItem[] = [];

  private mapProvider = AppConstant.mapProvider;

  public options!: MapOptions;

  public raceMarker: CircleMarker[] = [];

  public map !: L.Map;

  constructor() {
    this.options = {
      layers: [
        tileLayer(this.mapProvider, {
          maxZoom: 18,
          attribution: '...'
        })
      ],
      zoom: 2,
      center: latLng(0, 0)
    };
    //
  }

  ngOnChanges(): void {
    this.getSeasonMap();
  }

  onMapReady(map: L.Map) {
    this.map = map;
    this.fitMap();
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
        const raceMarker = circleMarker(position).on('click', () => {this.showPopup(race, position);});
        this.raceMarker.push(
          raceMarker
        );
      });
      this.fitMap();
    }
  }

  private fitMap() {
    if (this.raceMarker && this.raceMarker.length > 0 && this.map) {
      const bounds = latLngBounds(this.raceMarker.map(marker => {
        return marker.getLatLng();
      }));
      if (bounds) {
        this.map.fitBounds(bounds);
      }
    }
  }
}
