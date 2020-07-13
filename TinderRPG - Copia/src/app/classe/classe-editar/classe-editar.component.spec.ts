import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseEditarComponent } from './classe-editar.component';

describe('ClasseEditarComponent', () => {
  let component: ClasseEditarComponent;
  let fixture: ComponentFixture<ClasseEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasseEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasseEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
