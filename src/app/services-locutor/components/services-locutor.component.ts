import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
SwiperCore.use([EffectCoverflow, Pagination]);
@Component({
  selector: 'app-services-locutor',
  templateUrl: './services-locutor.component.html',
  styleUrls: ['./services-locutor.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ServicesLocutorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
