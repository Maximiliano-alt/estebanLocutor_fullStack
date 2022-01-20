import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from "swiper/angular";
import {MatIconModule} from '@angular/material/icon';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    SwiperModule,
    MatInputModule
  ],
  exports:[
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    SwiperModule,
    MatInputModule
  ]
})
export class MaterialModule { }
