import { Component, OnInit } from '@angular/core';
const OPTIONS = ['isPrime', 'isFibonacci'];

const isPrime = (number: number): boolean => {
  if (isNaN(number) || !isFinite(number) || number % 1 || number < 2) return false;
  var m = Math.sqrt(number);
  for (var i = 2; i <= m; i++)
      if (number % i == 0) return false;
  return true;
}

const isFibonacci = (number:number, count:number = 1, last:number = 0): boolean => {
  if (isNaN(number) || !isFinite(number)) return false;
  if(count < number){
     return isFibonacci(number, count+last, count);
  };
  if(count === number || number === 0){
     return true;
  }
  return false;
};

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.scss']
})
export class Question1Component implements OnInit {

  input1: string = '';

  options: string[] = OPTIONS;
  input2: string = OPTIONS[0];

  get numberInput1(): number { 
    const parsedNumber = parseInt(this.input1);
    return parsedNumber < 0 ? 1 : parsedNumber;
  }

  get result(): boolean { 

    /** isPrime */
    if (this.input2 == OPTIONS[0]) {
      return isPrime(this.numberInput1);

    /** isFibonacci */
    } else if (this.input2 == OPTIONS[1]) {
      return isFibonacci(this.numberInput1);

    } else {
      return false;
    }
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
