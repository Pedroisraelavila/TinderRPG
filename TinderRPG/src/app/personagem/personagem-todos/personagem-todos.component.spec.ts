import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonagemTodosComponent } from './personagem-todos.component';

describe('PersonagemTodosComponent', () => {
  let component: PersonagemTodosComponent;
  let fixture: ComponentFixture<PersonagemTodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonagemTodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonagemTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
