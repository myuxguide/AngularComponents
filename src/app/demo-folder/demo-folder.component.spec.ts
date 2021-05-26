import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFOlderComponent } from './demo-folder.component';

describe('DemoFOlderComponent', () => {
  let component: DemoFOlderComponent;
  let fixture: ComponentFixture<DemoFOlderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoFOlderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFOlderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
