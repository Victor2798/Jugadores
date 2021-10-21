import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Jugadores2Service {
private jugadores2:Jugador2[]=[
    
    {
        nombre: "James Rodriguez", 
        bio: "futbolista colombiano, que juega como centrocampista y su equipo actual es Al Rayyan S. C. de la Qatar Stars League. Recibió en 2009, 2012 y 2014 el premio de jugador revelación de la Primera División de Argentina y en la Primeira Liga de Portugal.",  
        img: "assets/img/james.jpeg",   
        nacimiento: "12 de julio de 1991",    
        seleccion:"Colombia",   
        equipo:"Everton",
    }
  ];

    constructor() {
        console.log("Servicio listo para usar")
    }
    getJugadores2():Jugador2[]{
        return this.jugadores2;
    }
    
}
export interface Jugador2{
    nombre: string;
    bio: string;
    img: string;
    nacimiento: string;
    seleccion: string;
    equipo: string
}