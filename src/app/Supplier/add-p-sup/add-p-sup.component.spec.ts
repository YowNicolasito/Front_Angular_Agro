import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPSupComponent } from './add-p-sup.component';

describe('AddPSupComponent', () => {
  let component: AddPSupComponent;
  let fixture: ComponentFixture<AddPSupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPSupComponent]
    });
    fixture = TestBed.createComponent(AddPSupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
