import { Route } from "@angular/compiler/src/core";
import { Injectable } from "@angular/core";
import { PreloadingStrategy } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class CustomPreloadStrategy implements PreloadingStrategy{
    preload(route: Route, load: () => Observable<any>):Observable<any>{
      console.log(route);
      return load();
    }
}
