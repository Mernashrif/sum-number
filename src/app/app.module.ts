import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { AppComponent } from './app.component';
import { SumComponent } from './sum-component/sum.component';
import { SumHistoryComponent } from './sum-history/sum-history.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatrialModule} from './matrial/matrial.module';

@NgModule({
  declarations: [
    AppComponent,
    SumComponent,
    SumHistoryComponent,
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,// Add FormsModule to imports
    MatrialModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
