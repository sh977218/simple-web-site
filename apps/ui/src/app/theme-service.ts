import { Injectable } from '@angular/core';
import { MatButtonToggleAppearance } from '@angular/material/button-toggle';
import { ThemePalette } from '@angular/material/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  colors: ThemePalette[] = ['primary', 'accent', 'warn'];
  appearance: MatButtonToggleAppearance[] = ['legacy', 'standard'];
  labelPosition = ['before', 'after'];
  darkMode = false;
  selectedColor: ThemePalette = 'primary';
  selectedAppearance: MatButtonToggleAppearance = 'legacy';
  selectedLabelPosition: 'before' | 'after' = 'before';
}
