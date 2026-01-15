import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  input,
  signal,
  viewChild,
} from '@angular/core';
import { beforeRender, NgtArgs } from 'angular-three';
import * as THREE from 'three';

@Component({
  selector: 'app-cube',
  template: `
    <ngt-mesh
      #mesh
      [position]="[positionX(), 1, 0]"
      [scale]="clicked() ? 1.5 : 1"
      (pointerover)="hovered.set(true)"
      (pointerout)="hovered.set(false)"
      (click)="clicked.set(!clicked())"
      castShadow
    >
      <ngt-box-geometry *args="[1, 2, 1]" />
      <ngt-mesh-standard-material
        [color]="hovered() ? 'hotpink' : 'mediumpurple'"
      />
    </ngt-mesh>
  `,
  imports: [NgtArgs],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Cube {
  positionX = input(0);
  protected hovered = signal(false);
  protected clicked = signal(false);

  private meshRef = viewChild.required<ElementRef<THREE.Mesh>>('mesh');
  constructor() {
    beforeRender(({ delta }) => {
      this.meshRef().nativeElement.rotation.y += delta;
    });
  }
}
