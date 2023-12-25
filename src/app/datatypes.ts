
export class CalcItem {
     number1: number=0; 
     number2: number=0;
     result: number=0;
     opetation: string="";
     public constructor(n1: number,n2: number) {
        this.doOperathion(n1,n2);
      }

    public doOperathion (n1: number,n2: number) {
        this.number1 = n1;
        this.number2 = n2;
        this.doSum();
      } 
      
    public doSum() {
        this.result= this.number1 + this.number2;
        this.opetation=  `${this.number1} + ${this.number2}`;
      }
    }


export class CalcHistory {
    selectedItem:CalcItem= new CalcItem(0,0);
    data: CalcItem[] =[]; 
    public doSum (n1: number,n2: number) {
        this.selectedItem= new CalcItem(n1,n2);
        this.data.push ( this.selectedItem );
    }
    public doSum2 () {
      this.selectedItem.doSum();
      this.data.push ( this.selectedItem );
      this.selectedItem= new CalcItem(0,0);
  }
  public doClear (){
    this.data=[];
    
  }
    doSelect(i:number){
    if (i<0){
      return;
      
    }
        this.selectedItem.number1=this.data[i].number1;
        this.selectedItem.number2=this.data[i].number2;
    }
}

let ci:CalcHistory= new CalcHistory();