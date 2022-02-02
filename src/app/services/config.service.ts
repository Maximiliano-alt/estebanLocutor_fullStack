import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  //datos;
  constructor(
    private http: HttpClient
  ) { }

  // loadConfig():Promise<void>{
  //    this.http.get('assets/config.json').subscribe(data => this.datos = data);
  // }
}
