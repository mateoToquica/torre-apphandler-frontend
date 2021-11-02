import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateValidatorComponent } from './candidate-validator.component';

describe('CandidateValidatorComponent', () => {
  let component: CandidateValidatorComponent;
  let fixture: ComponentFixture<CandidateValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
