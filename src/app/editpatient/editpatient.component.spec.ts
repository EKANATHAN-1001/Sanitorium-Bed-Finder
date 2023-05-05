import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpatientComponent } from './editpatient.component';

describe('EditpatientComponent', () => {
  let component: EditpatientComponent;
  let fixture: ComponentFixture<EditpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditpatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
