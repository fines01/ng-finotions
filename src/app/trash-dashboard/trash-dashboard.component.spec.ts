import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashDashboardComponent } from './trash-dashboard.component';

describe('TrashDashboardComponent', () => {
  let component: TrashDashboardComponent;
  let fixture: ComponentFixture<TrashDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrashDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrashDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
