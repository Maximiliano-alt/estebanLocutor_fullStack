import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutMeRoutingModule } from './about-me-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AboutMeRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class AboutMeModule { }
