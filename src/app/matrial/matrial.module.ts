import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';

const matrials: any[] | Type<any> | ModuleWithProviders<{}> = [
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatListModule,

];

@NgModule({

  imports: [matrials ],
  exports:[matrials ]
})
export class MatrialModule { }
