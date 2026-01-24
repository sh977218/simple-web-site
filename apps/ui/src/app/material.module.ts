import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
// Material Bottom Sheet
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
// Material Button & Indicators
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
// Material Popups & Modals
import { MatDialogModule } from '@angular/material/dialog';
// Material Layout
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
// Material Forms
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
// Material Navigation
import { MatSidenavModule } from '@angular/material/sidenav';
// Material Slide toggle
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
// Material Data Tables
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
// Material Trees
import { MatTreeModule } from '@angular/material/tree';

const materialModules = [
  // Button & Indicators
  MatButtonModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatRippleModule,
  MatBadgeModule,

  // Navigation
  MatSidenavModule,
  MatToolbarModule,
  MatMenuModule,
  MatListModule,
  MatTabsModule,
  MatStepperModule,

  // Layout
  MatDividerModule,
  MatExpansionModule,
  MatCardModule,

  // Forms
  MatInputModule,
  MatSelectModule,
  MatCheckboxModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSlideToggleModule,
  MatSliderModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatChipsModule,

  // Popups & Modals
  MatDialogModule,
  MatSnackBarModule,
  MatTooltipModule,

  // Data Tables
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatGridListModule,

  // Trees
  MatTreeModule,

  // Bottom Sheet
  MatBottomSheetModule,
];

@NgModule({
  imports: materialModules,
  exports: materialModules,
})
export class MaterialModule {}
