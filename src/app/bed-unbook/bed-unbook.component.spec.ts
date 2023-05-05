import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BedUnbookComponent } from './bed-unbook.component';

describe('BedUnbookComponent', () => {
  let component: BedUnbookComponent;
  let fixture: ComponentFixture<BedUnbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BedUnbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BedUnbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
