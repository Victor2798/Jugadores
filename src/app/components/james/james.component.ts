import { Component, OnInit } from '@angular/core';
import { Jugadores2Service, Jugador2 } from 'src/app/servicios/jugadores2.services';

@Component({
  selector: 'app-james',
  templateUrl: './james.component.html',
  styleUrls: ['./james.component.css']
})
export class JamesComponent implements OnInit {

  jugadores2:Jugador2[]=[];

  constructor(private _jugadores2Service:Jugadores2Service
    ) { }

    ngOnInit(): void {
      this.jugadores2=this._jugadores2Service.getJugadores2();
      console.log(this.jugadores2);
    }
}
