import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMedicineComponent } from './ListeMedicine.component';

describe('ListeMedicineComponent', () => {
  let component: ListeMedicineComponent;
  let fixture: ComponentFixture<ListeMedicineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeMedicineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
