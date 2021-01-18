import { RouterModule, Routes } from '@angular/router';
import { InicioComponent} from './components/inicio/inicio.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { BlogComponent } from './components/blog/blog.component';
import { LoginComponent } from './components/login/login.component';
const APP_ROUTES: Routes = [
    { path: 'Inicio', component: InicioComponent },
    { path: 'Nosotros', component: NosotrosComponent },
    { path: 'Blog', component: BlogComponent },
    { path: 'Cursos', component: CursosComponent },
    { path: 'Contacto', component: ContactoComponent },
    { path: 'Login', component: LoginComponent },
    { path: '**', pathMatch:'full', redirectTo: 'Inicio' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);