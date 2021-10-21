import { Component, OnInit } from '@angular/core';
import { Jugadores1Service, Jugador1 } from '../../servicios/jugadores1.services';


@Component({
  selector: 'app-ronaldo',
  templateUrl: './ronaldo.component.html',
  styleUrls: ['./ronaldo.component.css']
})
export class RonaldoComponent implements OnInit {

  jugadores1:Jugador1[]=[];

  constructor(private _jugadores1Service:Jugadores1Service
    ) { }

    ngOnInit(): void {
      this.jugadores1=this._jugadores1Service.getJugadores1();
      console.log(this.jugadores1);
    }

}
