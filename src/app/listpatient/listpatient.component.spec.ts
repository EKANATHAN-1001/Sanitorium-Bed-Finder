import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpatientComponent } from './listpatient.component';

describe('ListpatientComponent', () => {
  let component: ListpatientComponent;
  let fixture: ComponentFixture<ListpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListpatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
