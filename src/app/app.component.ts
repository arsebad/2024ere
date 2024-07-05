import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PrincipalComponent } from './pages/administracion/principal/principal.component';
import { ImportevaluacionComponent } from './pages/evaluacion/importevaluacion/importevaluacion.component';
import { CrearevaluacionComponent } from './pages/evaluacion/crearevaluacion/crearevaluacion.component';
import { LoginantComponent } from './pages/login/loginant/loginant.component';
import { LoginComponent } from './pages/login/login/login.component';
import { SinpaginaComponent } from './pages/sinpagina/sinpagina.component';
import { OlvidarclaveComponent } from './pages/login/olvidarclave/olvidarclave.component';
import { RegistrateComponent } from './pages/login/registrate/registrate.component';
import { CatalogoComponent } from './pages/guest/catalogo/catalogo.component';
import { DetailsComponent } from './pages/guest/details/details.component';
import { AsideComponent } from './pages/template/aside/aside.component';
import { HomeComponent } from './pages/template/home/home.component';
import { ModalbaseComponent } from './pages/template/modalbase/modalbase.component';
import { NavComponent } from './pages/template/nav/nav.component';
import { SettingsComponent } from './pages/template/settings/settings.component';
import { FooterComponent } from './pages/template/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    RouterLink,
    PrincipalComponent,
    ImportevaluacionComponent,
    CrearevaluacionComponent,
    LoginantComponent,
    LoginComponent,
    SinpaginaComponent,
    OlvidarclaveComponent,
    RegistrateComponent,
    CatalogoComponent,
    DetailsComponent,
    AsideComponent,
    HomeComponent,
    ModalbaseComponent,
    NavComponent,
    SettingsComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '2024ere';
}
