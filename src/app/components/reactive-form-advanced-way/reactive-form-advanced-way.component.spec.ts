import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormAdvancedWayComponent } from './reactive-form-advanced-way.component';

describe('ReactiveFormAdvancedWayComponent', () => {
  let component: ReactiveFormAdvancedWayComponent;
  let fixture: ComponentFixture<ReactiveFormAdvancedWayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormAdvancedWayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormAdvancedWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
