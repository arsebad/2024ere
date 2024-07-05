import { Routes } from '@angular/router';
import { CrearevaluacionComponent } from './pages/evaluacion/crearevaluacion/crearevaluacion.component';
import { ImportevaluacionComponent } from './pages/evaluacion/importevaluacion/importevaluacion.component';

import { LoginantComponent } from './pages/login/loginant/loginant.component';
import { LoginComponent } from './pages/login/login/login.component';
import { OlvidarclaveComponent } from './pages/login/olvidarclave/olvidarclave.component';
import { RegistrateComponent } from './pages/login/registrate/registrate.component';

import { CatalogoComponent } from './pages/guest/catalogo/catalogo.component';
import { DetailsComponent } from './pages/guest/details/details.component';

import { AsideComponent } from './pages/template/aside/aside.component';
import { FooterComponent } from './pages/template/footer/footer.component';
import { HomeComponent } from './pages/template/home/home.component';
import { ModalbaseComponent } from './pages/template/modalbase/modalbase.component';
import { NavComponent } from './pages/template/nav/nav.component';
import { SettingsComponent } from './pages/template/settings/settings.component';

import { SinpaginaComponent } from './pages/sinpagina/sinpagina.component';
import { PrincipalComponent } from './pages/administracion/principal/principal.component';
import { VistaevaluacionComponent } from './pages/evaluacion/vistaevaluacion/vistaevaluacion.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},

    {path: 'principal', component: PrincipalComponent},

    {path: 'importevaluacion', component: ImportevaluacionComponent},
    {path: 'vistaevaluacion', component: VistaevaluacionComponent},
    {path: 'crearevaluacion', component: CrearevaluacionComponent},


    {path: 'loginant', component: LoginantComponent},
    {path: 'login', component: LoginComponent},
    {path: 'olvidarclave', component: OlvidarclaveComponent},
    {path: 'registrate', component: RegistrateComponent},

    {path: 'catalogo', component: CatalogoComponent},
    {path: 'details', component: DetailsComponent},

    {path: 'aside', component: AsideComponent},
    {path: 'footer', component: FooterComponent},
    {path: 'home', component: HomeComponent},
    {path: 'modalbase', component: ModalbaseComponent},
    {path: 'nav', component: NavComponent},
    {path: 'settings', component: SettingsComponent},

    {path: '404', component: SinpaginaComponent},


    {path: '**', pathMatch: 'full', redirectTo: '404'}

];