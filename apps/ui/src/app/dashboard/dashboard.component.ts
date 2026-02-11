import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { MaterialModule } from '../material.module';

import { ExcelComponent } from './excel.component';
import { ExcelService } from './excel.service';

@Component({
  templateUrl: './dashboard.component.html',
  providers: [ExcelService],
  imports: [MaterialModule, ReactiveFormsModule, ExcelComponent],
})
export class DashboardComponent {
  private _formBuilder = inject(FormBuilder);

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    columnCtrl: ['', Validators.required],
    typeCtrl: ['', Validators.required],
  });
}
