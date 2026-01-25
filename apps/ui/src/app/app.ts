import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GoogleMap } from '@angular/google-maps';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MaterialModule } from './material.module';
import { ThemeService } from './theme-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [FormsModule, NgClass, NavBarComponent, MaterialModule, GoogleMap],
})
export class App {
  themeService = inject(ThemeService);
}
