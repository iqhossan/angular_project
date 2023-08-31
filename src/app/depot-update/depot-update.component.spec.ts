import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotUpdateComponent } from './depot-update.component';

describe('DepotUpdateComponent', () => {
  let component: DepotUpdateComponent;
  let fixture: ComponentFixture<DepotUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepotUpdateComponent]
    });
    fixture = TestBed.createComponent(DepotUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
