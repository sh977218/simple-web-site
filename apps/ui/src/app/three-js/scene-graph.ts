import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { extend, NgtArgs } from 'angular-three';
import * as THREE from 'three';

import { Cube } from './cube';

extend(THREE);

@Component({
  selector: 'app-scene-graph',
  template: `
    <ngt-ambient-light [intensity]="0.5" />
    <ngt-spot-light
      [position]="[5, 10, -10]"
      [intensity]="0.5 * Math.PI"
      [angle]="0.5"
      [penumbra]="1"
      [decay]="0"
      castShadow
    />
    <ngt-point-light [position]="-10" [intensity]="0.5 * Math.PI" [decay]="0" />

    <ngt-mesh [rotation]="[-Math.PI / 2, 0, 0]" receiveShadow>
      <ngt-circle-geometry *args="[4, 40]" />
      <ngt-mesh-standard-material />
    </ngt-mesh>

    <app-cube [positionX]="-2" />
    <app-cube [positionX]="2" />
  `,
  imports: [Cube, NgtArgs],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SceneGraph {
  protected readonly Math = Math;
}
