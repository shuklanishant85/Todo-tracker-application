import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';

export class WelcomeResponse {
  constructor(public message: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }
  welcomeMessage: string

  executeTodoWelcomeService(username) {
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeaders()
    // let headers = new HttpHeaders({
    //   Authorization : basicAuthHeaderString
    // })
    // return this.http.get<WelcomeResponse>(`${API_URL}/home/welcome/${username}`,{headers});
    return this.http.get<WelcomeResponse>(`${API_URL}/home/welcome/${username}`);

  }

  // createBasicAuthenticationHttpHeaders(){
  //   let username = 'nishant'
  //   let password = 'admin@123'
  //   return 'Basic '+ window.btoa(username + ':' + password)
  // }

}
