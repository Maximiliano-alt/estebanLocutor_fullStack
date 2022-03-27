import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//se importa para las peticiones al backend
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EmailMessageService {

  constructor(private http: HttpClient) { }

  sendMessage(body:string) {
    return this.http.post(environment.url, body);
    }
}
