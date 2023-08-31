import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandlingcostListComponent } from './handlingcost-list.component';

describe('HandlingcostListComponent', () => {
  let component: HandlingcostListComponent;
  let fixture: ComponentFixture<HandlingcostListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HandlingcostListComponent]
    });
    fixture = TestBed.createComponent(HandlingcostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
