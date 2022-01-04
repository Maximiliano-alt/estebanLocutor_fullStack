import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  container: boolean = true;
  container2: boolean = true;
  constructor() { }

  changeContainer(){
    if(this.container === true){
      this.container = false;
    }
    else{
      this.container = true;
    }
  }
  changeContainer2(){
    if(this.container2 === true){
      this.container2 = false;
    }
    else{
      this.container2 = true;
    }
  }
  ngOnInit(): void {
  }

}
