import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonagemNovoComponent } from './personagem-novo.component';

describe('PersonagemNovoComponent', () => {
  let component: PersonagemNovoComponent;
  let fixture: ComponentFixture<PersonagemNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonagemNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonagemNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
