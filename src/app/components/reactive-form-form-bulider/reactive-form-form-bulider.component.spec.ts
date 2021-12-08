import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormFormBuliderComponent } from './reactive-form-form-bulider.component';

describe('ReactiveFormFormBuliderComponent', () => {
  let component: ReactiveFormFormBuliderComponent;
  let fixture: ComponentFixture<ReactiveFormFormBuliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormFormBuliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormFormBuliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
