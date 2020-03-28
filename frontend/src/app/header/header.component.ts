import { Component, OnInit,Input } from '@angular/core';
import {LoginServiceService} from './../login/login-service.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isLogin : boolean =false;
  public usuario = null ;
  nombreUsuario:string;
  public isadmin =false;
  constructor( private login : LoginServiceService, private router : Router) { }
 

  ngOnInit() {
    this.ObtenerSesion();
  
    this.nombreUsuario=localStorage.getItem('user')
   
  }

  ObtenerSesion(){
    if(this.login.getToken() == null){
      this.isLogin= false
    }else{
      this.isLogin= true
    }
    
  }
  salir(){
    this.login.logout();
    //this.router.navigate([''])
    location.reload()
  }
 

}
