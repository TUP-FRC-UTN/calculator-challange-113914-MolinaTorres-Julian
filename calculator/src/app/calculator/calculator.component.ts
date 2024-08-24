import { Component } from '@angular/core';
import { CalculatorChildComponent } from "../calculator-child/calculator-child.component";

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CalculatorChildComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  value1: number = 0;
  value2: number = 0;
  result: number = 0;

  handleInput1(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.value1 = parseFloat(inputElement.value);
  }

  handleInput2(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.value2 = parseFloat(inputElement.value);
  }

  onResultReceived(result: number) {
    this.result = result;
  }

  clearInputs() {
    this.value1 = 0;
    this.value2 = 0;
    this.result = 0;
  }
}
