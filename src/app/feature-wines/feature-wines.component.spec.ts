import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureWinesComponent } from './feature-wines.component';

describe('FeatureWinesComponent', () => {
  let component: FeatureWinesComponent;
  let fixture: ComponentFixture<FeatureWinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureWinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureWinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
