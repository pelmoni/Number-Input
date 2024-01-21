import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardIntputComponent } from './standard-intput.component';

describe('StandardIntputComponent', () => {
  let component: StandardIntputComponent;
  let fixture: ComponentFixture<StandardIntputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandardIntputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StandardIntputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
