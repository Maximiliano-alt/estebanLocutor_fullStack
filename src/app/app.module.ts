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
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    ContactComponent,
    GalleryComponent,
    ServicesLocutorComponent,
    MultimediaComponent,
    ContractComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
