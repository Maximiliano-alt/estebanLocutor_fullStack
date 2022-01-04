import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule
  ],
  exports:[
    MatIconModule,
    FormsModule
  ]
})
export class MaterialModule { }
