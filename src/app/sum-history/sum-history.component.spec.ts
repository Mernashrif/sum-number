import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumHistoryComponent } from './sum-history.component';

describe('SumHistoryComponent', () => {
  let component: SumHistoryComponent;
  let fixture: ComponentFixture<SumHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SumHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SumHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
