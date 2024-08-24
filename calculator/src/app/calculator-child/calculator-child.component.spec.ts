import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorChildComponent } from './calculator-child.component';

describe('CalculatorChildComponent', () => {
  let component: CalculatorChildComponent;
  let fixture: ComponentFixture<CalculatorChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
