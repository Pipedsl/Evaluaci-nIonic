import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaParticipantesPageRoutingModule } from './lista-participantes-routing.module';

import { ListaParticipantesPage } from './lista-participantes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaParticipantesPageRoutingModule
  ],
  declarations: [ListaParticipantesPage]
})
export class ListaParticipantesPageModule {}
