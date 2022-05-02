import { Component, Input, OnChanges } from '@angular/core';
import { circleMarker, CircleMarker, latLng, latLngBounds, LatLngExpression, MapOptions, tileLayer } from 'leaflet';
import { ICircuitItem } from '../../../interfaces/circuit';

@Component({
  selector: 'f1-circuit-map',
  templateUrl: './circuit-map.component.html',
  styleUrls: ['./circuit-map.component.scss']
})
export class CircuitMapComponent  implements OnChanges {

  @Input() circuit!: ICircuitItem;

  private mapProvider = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

  public options!: MapOptions;

  public circuitMarker!: CircleMarker;

  public map !:L.Map;

  constructor() {
    this.options = {
      layers: [
        tileLayer(this.mapProvider, {
          maxZoom: 18,
          attribution: '...'
        })
      ],
      zoom: 15,
      center: latLng(0,0)
    };
    //
  }

  ngOnChanges(): void {
    this.getTrackMap();
  }

  onMapReady(map: L.Map) {
    this.map = map;
    this.fitMap();
 }

  showPopup(circuit: ICircuitItem, position: LatLngExpression) {
        this.map.openPopup(`${circuit.circuitName} - ${circuit.Location.country}`, position);
  }

  private getTrackMap() {
    if (this.circuit) {
      const position: LatLngExpression = [
        Number(this.circuit.Location.lat),
        Number(this.circuit.Location.long)
      ];
      this.circuitMarker = circleMarker(position).on('click', () => {this.showPopup(this.circuit, position)});
      this.fitMap();
    }
  }

  private fitMap() {
    if (this.circuitMarker && this.map) {
        this.map.setView(this.circuitMarker.getLatLng())
    }
  }
}
