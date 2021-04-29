import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobScreenComponent } from './job-screen.component';

describe('JobScreenComponent', () => {
  let component: JobScreenComponent;
  let fixture: ComponentFixture<JobScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
