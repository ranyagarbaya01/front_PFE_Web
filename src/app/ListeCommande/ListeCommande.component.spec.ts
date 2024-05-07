import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCommandeComponent } from './ListeCommande.component';

describe('ListeCommandeComponent', () => {
  let component: ListeCommandeComponent;
  let fixture: ComponentFixture<ListeCommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeCommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
