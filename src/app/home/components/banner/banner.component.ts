import { Component, OnInit, ViewChild,ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y,EffectCoverflow } from 'swiper';
import { SwiperComponent } from "swiper/angular";

SwiperCore.use([EffectCoverflow, Pagination]);



@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BannerComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }






}
