import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseTodosComponent } from './classe-todos.component';

describe('ClasseTodosComponent', () => {
  let component: ClasseTodosComponent;
  let fixture: ComponentFixture<ClasseTodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasseTodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasseTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
