import { NgtLoader } from '@angular-three/core';
import { Component } from '@angular/core';
import { BufferGeometry } from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';

@Component({
  selector: 'f1-three-model',
  templateUrl: './three-model.component.html',
  styleUrls: ['./three-model.component.scss'],
})
export class ThreeModelComponent {
  model!: BufferGeometry;

  constructor(private loader: NgtLoader) {
    this.loader.use(STLLoader, 'assets/models/australia.stl').subscribe(buffer => {
      this.model = buffer;
    });
  }
}
