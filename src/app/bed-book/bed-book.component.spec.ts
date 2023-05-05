import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BedBookComponent } from './bed-book.component';

describe('BedBookComponent', () => {
  let component: BedBookComponent;
  let fixture: ComponentFixture<BedBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BedBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BedBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
