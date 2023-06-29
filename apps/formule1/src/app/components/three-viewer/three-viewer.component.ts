import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { AmbientLight, Mesh, MeshPhongMaterial, PerspectiveCamera, PointLight, Scene, WebGLRenderer } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';

@Component({
  selector: 'f1-three-viewer',
  templateUrl: './three-viewer.component.html',
  styleUrls: ['./three-viewer.component.scss'],
})
export class ThreeViewerComponent implements OnInit, AfterViewInit {

  @ViewChild('threeCanvas') threeCanvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('threeContainer') threeContainer!: ElementRef<HTMLDivElement>;
  @Input() path !: string;
  private scene!: Scene;
  private camera!: PerspectiveCamera;
  private renderer!: WebGLRenderer;
  private controls!: OrbitControls;
  private loader: STLLoader;

  public hideCanvas = false;

  constructor(private render: Renderer2) {
    this.loader = new STLLoader();
  }

  ngOnInit(): void {
    //add listener for the resize of the window - will resize the renderer to fit the window
    this.render.listen('window', 'resize', () => {
      this.onWindowResize();
    });
  }

  ngAfterViewInit(): void {
    if (this.path) {
      this.init3D();
    }
  }

  init3D() {
    // renderer
    this.renderer = new WebGLRenderer({ alpha: true, canvas: this.threeCanvas.nativeElement });
    this.renderer.setSize(this.threeContainer.nativeElement.offsetWidth, this.threeContainer.nativeElement.offsetHeight);
    this.renderer.setClearColor(0x000000, 0); // the default

    // scene
    this.scene = new Scene();

    // camera
    this.camera = new PerspectiveCamera(50, this.threeCanvas.nativeElement.width / this.threeCanvas.nativeElement.height, 0.01, 2000);
    this.camera.position.set(213, 211, 213);
    this.camera.aspect = this.threeCanvas.nativeElement.width / this.threeCanvas.nativeElement.height;
    this.scene.add(new AmbientLight(0x222222));
    this.scene.add(this.camera); // required, because we are adding a light as a child of the camera

    // controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    // lights
    const light = new PointLight(0xffffff, 0.8);
    this.camera.add(light);

    this.loader.load(this.path, geometry => {

      const material = new MeshPhongMaterial({ color: 0xff3333 });

      const mesh = new Mesh(geometry, material);

      mesh.geometry.computeBoundingSphere();

      mesh.geometry.center();

      const distance = Number(geometry.boundingSphere?.radius) * 1.5;

      this.camera.position.set(distance, distance, distance);
      this.controls.autoRotate = true;

      this.scene.add(mesh);
    }, () => {
      // progress
    }, () => {
      // error
      this.hideCanvas = true;
    });

    //request animation
    this.animate();

  }

  /**
   * render the scene and request the window animation frame
   */
  animate() {
    this.camera.lookAt(this.scene.position);
    if (
      this.controls.getAzimuthalAngle() >= 0.8 || // Math.PI / 2 = half
      this.controls.getAzimuthalAngle() <= -0.8
    ) {
      this.controls.autoRotateSpeed *= -1;
    }

    this.controls.update();
    this.renderer.render(this.scene, this.camera);
    window.requestAnimationFrame(() => this.animate());

  }

  /**
   * will resize the renderer and the camera to the right size of the window
   */
  onWindowResize() {
    this.camera.aspect = this.threeContainer.nativeElement.offsetWidth / this.threeContainer.nativeElement.offsetHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.threeContainer.nativeElement.offsetWidth, this.threeContainer.nativeElement.offsetHeight);
  }
}
