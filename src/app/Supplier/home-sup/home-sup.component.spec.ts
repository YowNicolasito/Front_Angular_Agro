import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSupComponent } from './home-sup.component';

describe('HomeSupComponent', () => {
  let component: HomeSupComponent;
  let fixture: ComponentFixture<HomeSupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeSupComponent]
    });
    fixture = TestBed.createComponent(HomeSupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
