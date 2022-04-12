import { Component, OnInit, ViewChild,ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);



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
