import { Component , Output, EventEmitter, Input  } from '@angular/core';
import {CalcItem,CalcHistory} from '../datatypes';
import { DataService} from '../data.service.service';
import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-sum',
  templateUrl: './sum.component.html',
  styleUrls: ['./sum.component.css']
})
export class SumComponent {
  constructor(private  myService:  DataService) {}
  ci:CalcHistory= this.myService.getCalcHistory();
  n1 :number =0;
  n2 :number =0;
  calculateSum(): void {
    this.ci.doSum2();

    // ... rest of the code
  }
  doTest(){
    this.ci.selectedItem.number1=100;
    
  }

//  @Input() history: CalcHistory= new CalcHistory();
  // @Output() selectedCalculation = new EventEmitter<{ operation: string, result: number, numbers: { number1: number, number2: number } }>();

  // useSelectedCalculation(calculation: { operation: string, result: number, numbers: { number1: number, number2: number } }): void {
  //   this.selectedCalculation.emit(calculation);
  // }
}