import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainHomeComponent } from './complain-home.component';

describe('ComplainHomeComponent', () => {
  let component: ComplainHomeComponent;
  let fixture: ComponentFixture<ComplainHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplainHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplainHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
