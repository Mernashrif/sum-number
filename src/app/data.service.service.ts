import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {CalcItem,CalcHistory} from './datatypes';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {

   }

   ci:CalcHistory= new CalcHistory();
   getCalcHistory():CalcHistory {
    return this.ci;
  }

}
