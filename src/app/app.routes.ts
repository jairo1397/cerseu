import { RouterModule, Routes } from '@angular/router';
import { InicioComponent} from './components/inicio/inicio.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { BlogComponent } from './components/blog/blog.component';
import { LoginComponent } from './components/login/login.component';
import { CursoComponent } from './components/curso/curso.component';
import { PagosComponent } from './components/pagos/pagos.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { ResgistroComponent } from './components/resgistro/resgistro.component';
const APP_ROUTES: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'cursos', component: CursosComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'login', component: LoginComponent },
    { path: 'curso/:id', component: CursoComponent },
    { path: 'pagos', component: PagosComponent },
    { path: 'buscar/:termino', component: BuscadorComponent },
    { path: 'usuario', component: UsuarioComponent },
    { path: 'registro', component: ResgistroComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'Inicio' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
