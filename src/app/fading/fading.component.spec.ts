import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FadingComponent } from './fading.component';

describe('FadingComponent', () => {
  let component: FadingComponent;
  let fixture: ComponentFixture<FadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
