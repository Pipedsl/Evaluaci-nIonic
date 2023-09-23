import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaParticipantesPage } from './lista-participantes.page';

describe('ListaParticipantesPage', () => {
  let component: ListaParticipantesPage;
  let fixture: ComponentFixture<ListaParticipantesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListaParticipantesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
