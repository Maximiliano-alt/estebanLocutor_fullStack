import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/components/about-me.component';
import { HomeComponent } from './home/components/home/home.component';
import { CustomPreloadStrategy } from './custom-preload';
import { ServicesLocutorComponent } from './services-locutor/components/services-locutor.component';
import { MultimediaComponent } from './multimedia/components/multimedia.component';
import { ContactComponent } from './contact/components/contact.component';
import { ContractComponent } from './contract/components/contract.component';
const routes: Routes = [
  {
    path:'home',
    component:HomeComponent  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'sobre-mi',
    component:AboutMeComponent
  },
  {
    path:'servicios',
    component:ServicesLocutorComponent
  },
  {
    path:'multimedia',
    component:MultimediaComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'contract',
    component:ContractComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy:CustomPreloadStrategy//estrategia de precarga
  })],
  providers:[
    CustomPreloadStrategy
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
