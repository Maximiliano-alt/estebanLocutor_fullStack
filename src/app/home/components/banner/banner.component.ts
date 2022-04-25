import { Component, OnInit, ViewChild,ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Zoom, Navigation, Pagination, Swiper } from "swiper";

// install Swiper modules
SwiperCore.use([Zoom, Navigation, Pagination]);
Swiper.use([Navigation, Pagination]);


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class BannerComponent implements OnInit {

  thumbsSwiper: any;
  constructor() { }

  ngOnInit(): void {
  }






}
