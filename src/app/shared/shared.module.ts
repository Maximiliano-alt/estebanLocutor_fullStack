import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '../material/material.module';
import { BannerComponent } from '../home/components/banner/banner.component';
@NgModule({
  declarations: [
    HeaderComponent,
    BannerComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,

  ],
  exports:[
    HeaderComponent,
    BannerComponent

  ]
})
export class SharedModule { }
