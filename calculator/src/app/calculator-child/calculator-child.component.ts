import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calculator-child',
  standalone: true,
  imports: [],
  templateUrl: './calculator-child.component.html',
  styleUrl: './calculator-child.component.css'
})
export class CalculatorChildComponent {
  @Input() value1!: number;
  @Input() value2!: number;
  @Output() resultEvent = new EventEmitter<number>();
  @Output() clearEvent = new EventEmitter<void>();

  operate(operation: string) {
    let result: number;

    switch (operation) {
      case 'suma':
        result = this.value1 + this.value2;
        break;
      case 'resta':
        result = this.value1 - this.value2;
        break;
      case 'multiplicar':
        result = this.value1 * this.value2;
        break;
      case 'dividir':
        result = this.value1 / this.value2;
        break;
      case 'potencia':
        result = Math.pow(this.value1, this.value2);
        break;
      case 'raiz':
        result = Math.pow(this.value1, 1 / this.value2);
        break;
      case 'borrar':

      default:
        return;
    }

    this.resultEvent.emit(result);

  }

  clearInputs() {
    this.clearEvent.emit();
  }
}
