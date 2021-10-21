import { Component, OnInit } from '@angular/core';
import { JugadoresService, Jugador } from 'src/app/servicios/jugadores.service';

@Component({
  selector: 'app-messi',
  templateUrl: './messi.component.html',
  styleUrls: ['./messi.component.css']
})
export class MessiComponent implements OnInit {
  jugadores:Jugador[]=[];

  constructor(private _jugadoresService:JugadoresService
    ) { }

    ngOnInit(): void {
      this.jugadores=this._jugadoresService.getJugadores();
      console.log(this.jugadores);
    }

}
