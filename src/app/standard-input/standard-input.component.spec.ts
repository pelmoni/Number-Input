import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardInputComponent } from './standard-input.component';

describe('StandardIntputComponent', () => {
  let component: StandardInputComponent;
  let fixture: ComponentFixture<StandardInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandardInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandardInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
