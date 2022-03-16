import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/components/home/home.component';
import { AboutMeComponent } from './about-me/components/about-me.component';
import { ContactComponent } from './contact/components/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ServicesLocutorComponent } from './services-locutor/components/services-locutor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { MultimediaComponent } from './multimedia/components/multimedia.component';
import { ContractComponent } from './contract/components/contract.component';
import { FormsModule } from '@angular/forms';
import { EmailMessageService } from './services/email-message.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { SwiperModule } from "swiper/angular";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    ServicesLocutorComponent,
    MultimediaComponent,
    AboutMeComponent,
    ContactComponent,
    GalleryComponent,
    ContractComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    SwiperModule
  ],
  providers: [EmailMessageService,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
