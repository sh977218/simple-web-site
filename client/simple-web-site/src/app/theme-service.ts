import { Injectable } from '@angular/core';
import { MatButtonToggleAppearance } from '@angular/material/button-toggle';
import { ThemePalette } from '@angular/material/core';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  colors$ = of<ThemePalette[]>(['primary', 'accent', 'warn']);
  appearance$ = of<MatButtonToggleAppearance[]>(['legacy', 'standard']);
  labelPosition$ = of(['before', 'after']);
  darkMode = false;
  selectedColor: ThemePalette = 'primary';
  selectedAppearance: MatButtonToggleAppearance = 'legacy';
  selectedLabelPosition: 'before' | 'after' = 'before';
}
