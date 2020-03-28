import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductoComponent } from './producto/producto.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CarteraComponent } from './cartera/cartera.component';
import { SesionComponent } from './sesion/sesion.component';
import {HttpClientModule} from '@angular/common/http';
import { RestService} from './productos/rest.service';
import { NotfoundComponent } from './notfound/notfound.component';

import { MenueditorComponent } from './menueditor/menueditor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { PersonalComponent } from './personal/personal.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { ListaCategoriaComponent } from './lista-categoria/lista-categoria.component';
import { UsuarioformComponent } from './usuarioform/usuarioform.component';
import { CategoriaformComponent } from './categoriaform/categoriaform.component';
import { ProductoformComponent } from './productoform/productoform.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { BuscadorPipe } from './productos/buscador.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ProductosComponent,
    ProductoComponent,
    ContactoComponent,
    CarteraComponent,
    SesionComponent,
    NotfoundComponent,
    MenueditorComponent,
    PersonalComponent,
    ListaUsuarioComponent,
    ListaProductosComponent,
    ListaCategoriaComponent,
    UsuarioformComponent,
    CategoriaformComponent,
    ProductoformComponent,
    LoginComponent,
    BuscadorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    FormsModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
