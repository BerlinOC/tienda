import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  constructor(private route:Router) {  }

  ngOnInit(): void {
  }
  Agregar(){
    this.route.navigate(['editor/formularioUsuario'])

  }

}
