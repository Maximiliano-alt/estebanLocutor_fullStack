<<<<<<< HEAD
import { AfterViewInit, Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
//import Swiper from 'swiper';
=======
import { Component, OnInit } from '@angular/core';

>>>>>>> 0624b55 (basic changes)
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
<<<<<<< HEAD
export class HomeComponent implements OnInit,AfterViewInit {
  mySwiper: Swiper;
  constructor() {
    this.mySwiper = new Swiper('.swiper-container');}
  ngOnInit(): void {}
  ngAfterViewInit() { this.mySwiper = new Swiper('.swiper-container');}
=======
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

>>>>>>> 0624b55 (basic changes)
}
