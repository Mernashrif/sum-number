import { Component,Input, Output, EventEmitter  } from '@angular/core';
import {CalcItem,CalcHistory} from '../datatypes';
import { DataService} from '../data.service.service';

@Component({
  selector: 'app-sum-history',
  templateUrl: './sum-history.component.html',
  styleUrl: './sum-history.component.css'
})

export class SumHistoryComponent {
  constructor(private  myService:  DataService) {}
  ci:CalcHistory=this.myService.getCalcHistory();

  selectedValue=-1;

   selectHistoryItem(index:number ): void {

    console.log("selectHistoryItem");
    this.ci.doSelect(index);
   }
   clearCalcHistory() {
    console.log("historycleard");
    this.ci.doClear();
   
  }
}
  
