import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from "swiper/angular";
import {MatIconModule} from '@angular/material/icon';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    SwiperModule
  ],
  exports:[
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    SwiperModule
  ]
})
export class MaterialModule { }
