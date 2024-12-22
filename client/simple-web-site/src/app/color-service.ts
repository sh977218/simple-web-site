import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { MatButtonToggleAppearance } from '@angular/material/button-toggle';
import { ThemePalette } from '@angular/material/core';

@Injectable({ providedIn: 'root' })
export class ColorService {
  colors$ = of<ThemePalette[]>(['primary', 'accent', 'warn']);

  appearance$ = of<MatButtonToggleAppearance[]>(['legacy', 'standard']);

  darkMode = false;
}
