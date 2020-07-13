import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseDetalhesComponent } from './classe-detalhes.component';

describe('ClasseDetalhesComponent', () => {
  let component: ClasseDetalhesComponent;
  let fixture: ComponentFixture<ClasseDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasseDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasseDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
