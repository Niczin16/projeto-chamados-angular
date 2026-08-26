import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadosCard } from './chamados-card';

describe('ChamadosCard', () => {
  let component: ChamadosCard;
  let fixture: ComponentFixture<ChamadosCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChamadosCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ChamadosCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
