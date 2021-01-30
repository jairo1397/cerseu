import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//rutas
import { APP_ROUTING } from './app.routes';
//servicios
import { CursosService } from './services/cursos.service';
//componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { BlogComponent } from './components/blog/blog.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { PagosComponent } from './components/pagos/pagos.component';
import { CursoComponent } from './components/curso/curso.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { CursoTarjetaComponent } from './components/curso-tarjeta/curso-tarjeta.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { ResgistroComponent } from './components/resgistro/resgistro.component';

import { ClasesComponent } from './components/clases/clases.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CursosComponent,
    NosotrosComponent,
    InicioComponent,
    BlogComponent,
    FooterComponent,
    ContactoComponent,
    LoginComponent,
    HeaderComponent,
    PagosComponent,
    CursoComponent,
    BuscadorComponent,
    CursoTarjetaComponent,
    UsuarioComponent,
    ResgistroComponent,
    ClasesComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    CursosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
