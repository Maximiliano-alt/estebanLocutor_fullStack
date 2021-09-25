import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from "swiper/angular";
import {MatIconModule} from '@angular/material/icon';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    SwiperModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  exports:[
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    SwiperModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class MaterialModule { }
