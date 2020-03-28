import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductosComponent} from './productos/productos.component';
import {MainComponent} from './main/main.component';
import {ContactoComponent} from './contacto/contacto.component';

import {CarteraComponent} from './cartera/cartera.component';
import {ProductoComponent} from './producto/producto.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {MenueditorComponent} from './menueditor/menueditor.component';
import {ListaUsuarioComponent} from './lista-usuario/lista-usuario.component';
import {ListaProductosComponent} from './lista-productos/lista-productos.component';
import {ListaCategoriaComponent} from './lista-categoria/lista-categoria.component';
import {PersonalComponent} from './personal/personal.component';
import {LoginComponent} from './login/login.component';
import {ProductoformComponent} from './productoform/productoform.component';
import { UsuarioformComponent } from './usuarioform/usuarioform.component';
import { CategoriaformComponent } from './categoriaform/categoriaform.component';
const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },

  {
  path: 'productos',
  component: ProductosComponent,
},

{
  path: 'contacto',
  component: ContactoComponent,
},
{
  path: 'cartera',
  component: CarteraComponent,
},
{
  path: 'login',
  component: LoginComponent,
},
{
  path: 'producto/:id',
  component: ProductoComponent,
},
{
  path: 'editor',
  component: MenueditorComponent,
  children: [
    {
      path: 'listausuarios',
      component: ListaUsuarioComponent,
    },
    {
      path: 'formularioUsuario',
      component: UsuarioformComponent,
    },
    {
      path: 'listaproductos',
      component: ListaProductosComponent,
    },
    {
      path: 'formularioProducto',
      component: ProductoformComponent,
    },
    {
      path: 'listacategorias',
      component: ListaCategoriaComponent,
    },
    {
      path: 'listacategorias/:id',
      component: CategoriaformComponent,
    },
    {
      path: 'informacionPersonal',
      component: PersonalComponent,
    },
    
  ]
},

{
  path: '**',
  component: NotfoundComponent,
}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}


