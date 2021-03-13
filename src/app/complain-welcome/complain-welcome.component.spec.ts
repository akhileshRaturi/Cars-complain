import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainWelcomeComponent } from './complain-welcome.component';

describe('ComplainWelcomeComponent', () => {
  let component: ComplainWelcomeComponent;
  let fixture: ComponentFixture<ComplainWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplainWelcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplainWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
