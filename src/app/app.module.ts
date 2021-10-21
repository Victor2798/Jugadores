import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { APP_ROUTING } from './app.routes';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { MessiComponent } from './components/messi/messi.component';
import { RonaldoComponent } from './components/ronaldo/ronaldo.component';
import { JamesComponent } from './components/james/james.component';
import { JugadoresService } from './servicios/jugadores.service';
import { Jugadores1Service } from './servicios/jugadores1.services';
import { Jugadores2Service } from './servicios/jugadores2.services';

@NgModule({
  declarations: [
    AppComponent,
    JugadoresComponent,
    FooterComponent,
    NavComponent,
    MessiComponent,
    RonaldoComponent,
    JamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [JugadoresService, Jugadores1Service, Jugadores2Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
