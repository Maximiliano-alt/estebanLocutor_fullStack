<<<<<<< HEAD
import { Component, OnInit, ViewChild,ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y,EffectCoverflow } from 'swiper';
import { SwiperComponent } from "swiper/angular";

SwiperCore.use([EffectCoverflow, Pagination]);


=======
import { Component, OnInit } from '@angular/core';
>>>>>>> 0624b55 (basic changes)

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
<<<<<<< HEAD
  styleUrls: ['./banner.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BannerComponent implements OnInit {


=======
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

>>>>>>> 0624b55 (basic changes)
  constructor() { }

  ngOnInit(): void {
  }

<<<<<<< HEAD





=======
>>>>>>> 0624b55 (basic changes)
}
