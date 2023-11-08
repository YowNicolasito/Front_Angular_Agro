import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCComponent } from './register-c.component';

describe('RegisterCComponent', () => {
  let component: RegisterCComponent;
  let fixture: ComponentFixture<RegisterCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterCComponent]
    });
    fixture = TestBed.createComponent(RegisterCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
