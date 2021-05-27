import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TejasviComponent } from './tejasvi.component';

describe('TejasviComponent', () => {
  let component: TejasviComponent;
  let fixture: ComponentFixture<TejasviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TejasviComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TejasviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
