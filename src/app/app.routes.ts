import { RouterModule, Routes } from "@angular/router";
import { Component } from '@angular/core';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { MessiComponent } from './components/messi/messi.component';
import { RonaldoComponent } from './components/ronaldo/ronaldo.component';
import { JamesComponent } from './components/james/james.component';

const APP_ROUTES: Routes=[
    {path:'Jugadores', component:JugadoresComponent},
    {path:'Messi', component:MessiComponent},
    {path:'Ronaldo', component:RonaldoComponent},
    {path:'James', component:JamesComponent},
    {path:'**', pathMatch:'full', redirectTo:'Jugadores'}
]; 

export const APP_ROUTING= RouterModule.forRoot(APP_ROUTES);