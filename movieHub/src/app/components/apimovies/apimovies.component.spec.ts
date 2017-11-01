import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApimoviesComponent } from './apimovies.component';

describe('ApimoviesComponent', () => {
  let component: ApimoviesComponent;
  let fixture: ComponentFixture<ApimoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApimoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApimoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
