import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionElementsComponent } from './position-elements.component';

describe('PositionElementsComponent', () => {
  let component: PositionElementsComponent;
  let fixture: ComponentFixture<PositionElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositionElementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
