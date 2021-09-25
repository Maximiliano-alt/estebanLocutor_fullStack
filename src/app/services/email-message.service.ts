import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//se importa para las peticiones al backend
@Injectable({
  providedIn: 'root'
})
export class EmailMessageService {

  constructor(private http: HttpClient) { }

  sendMessage(body:string) {
    return this.http.post('https://calm-basin-75840.herokuapp.com/formulario', body);
    }
}
