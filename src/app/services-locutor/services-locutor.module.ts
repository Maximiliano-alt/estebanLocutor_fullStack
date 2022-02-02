import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesLocutorRoutingModule } from './services-locutor-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ServicesLocutorRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class ServicesLocutorModule { }
