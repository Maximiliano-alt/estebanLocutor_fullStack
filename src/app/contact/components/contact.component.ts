import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Pagination } from "swiper";
import { SwiperComponent } from "swiper/angular";

SwiperCore.use([Pagination]);
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
