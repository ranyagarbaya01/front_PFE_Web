import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLivreurComponent } from './AddLivreur.component';

describe('AddLivreurComponent', () => {
  let component: AddLivreurComponent;
  let fixture: ComponentFixture<AddLivreurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLivreurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLivreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
