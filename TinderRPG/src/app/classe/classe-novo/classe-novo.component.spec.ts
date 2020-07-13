import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseNovoComponent } from './classe-novo.component';

describe('ClasseNovoComponent', () => {
  let component: ClasseNovoComponent;
  let fixture: ComponentFixture<ClasseNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasseNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasseNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
