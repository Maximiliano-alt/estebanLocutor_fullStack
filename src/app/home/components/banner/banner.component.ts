import { Component, OnInit, ViewChild } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  @ViewChild('carousel', { static: true })

  images: string[] = [
    'assets/images/esteban-banner.png',
    'assets/images/Screenshot-esteban.png',
    ];
    paused = false;
    unpauseOnArrow = false;
    pauseOnIndicator = false;
    pauseOnHover = true;
    pauseOnFocus = true;
    onSwiper(swiper:any) {
      console.log(swiper);
    }
    onSlideChange() {
      console.log('slide change');
    }
  constructor() { }

  ngOnInit(): void {
  }




}
