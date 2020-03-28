import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import {loginuser} from './login.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  
  httpOptions : any
 ;

  constructor(private httpcliente: HttpClient,) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
  
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', 'token 017fa90cae2bba1015dec336ab619067c61baa5e')
    
  }
  
   runHttpOptions(id){
     
   }
  
  login(user: loginuser){

    return this.httpcliente.post('http://127.0.0.1:8000/auth/', user );

  }
  getUser(id){
   
    return this.httpcliente.get('http://127.0.0.1:8000/users/'+id,this.httpOptions)

  }
  setToken(tokem){

    localStorage.setItem("accessToken",tokem)
  }
  getToken() {
    return localStorage.getItem("accessToken");
  }


  setUserLogueado(user){
    
    localStorage.setItem("user",user)
  }
  getUserLogueado() {
    return localStorage.getItem("user");
  }


  logout() {
   localStorage.removeItem("accessToken")
   localStorage.removeItem("user")
   //return this.httpcliente.post('http://127.0.0.1:8000/auth/',  );
  }
  



}
