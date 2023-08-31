import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotListComponent } from './depot-list.component';

describe('DepotListComponent', () => {
  let component: DepotListComponent;
  let fixture: ComponentFixture<DepotListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepotListComponent]
    });
    fixture = TestBed.createComponent(DepotListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
