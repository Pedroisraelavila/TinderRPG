import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonagemEditarComponent } from './personagem-editar.component';

describe('PersonagemEditarComponent', () => {
  let component: PersonagemEditarComponent;
  let fixture: ComponentFixture<PersonagemEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonagemEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonagemEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
