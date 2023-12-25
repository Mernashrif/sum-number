import { Component } from '@angular/core';
import {CalcItem,CalcHistory} from './datatypes';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  /*
  history: CalcHistory= new CalcHistory();
  selectedCalculation: { operation: string, result: number, numbers: { number1: number, number2: number } } | null = null;

  addCalculation(calculation: { operation: string, result: number, numbers: { number1: number, number2: number } }): void {
    this.history.push(calculation);
  }

  useSelectedCalculation(calculation: { operation: string, result: number, numbers: { number1: number, number2: number } }): void {
    this.selectedCalculation = calculation;
    // Set the input fields with the selected numbers
    const { number1, number2 } = calculation.numbers;
    // Assign number1 and number2 to the input fields
  }
  */
}
