import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IParticipantes } from './../types/IParticipantes'

@Component({
  selector: 'app-mostrar-participante',
  templateUrl: './mostrar-participante.component.html',
  styleUrls: ['./mostrar-participante.component.scss'],
})
export class MostrarParticipanteComponent  implements OnInit {

  @Input() public participante!: IParticipantes;  
  @Output()
  public participanteDesactivado = new EventEmitter()
  public participanteActivado = new EventEmitter()

  constructor() { }
  public cambiarRojo(){
    console.log("ID desde el hijo", this.participante.ID);
    this.participanteDesactivado.emit(this.participante.ID);
  }
  public cambiarVerde(){
    console.log("ID desde el hijo", this.participante.ID);
    this.participanteActivado.emit(this.participante.ID);
  }
  ngOnInit() {}

}
