import { HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
declare var gapi: any;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http:any
  constructor() { }
  sendEmail(){
    this.http.post()
  }
  initGoogleOAuth(): Promise<any> {
    return new Promise((resolve, reject) => {
        gapi.load('auth2', async () => {
            const gAuth = await gapi.auth2.init({
                client_id: environment.GAPI_CLIENT_ID,
                fetch_basic_profile: true,
                scope: 'profile email'
            });
            resolve(gAuth);
        }, reject);
        gapi.post()
    });
}
}
