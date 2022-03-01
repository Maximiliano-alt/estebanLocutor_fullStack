import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//se importa para las peticiones al backend
@Injectable({
  providedIn: 'root'
})
export class EmailMessageService {

  constructor(private http: HttpClient) { }

  sendMessage(body:string) {
    return this.http.post('http://localhost:3000/formulario', body);
    }
}
