import { ISortable } from './ISortable';


export class CharacterGroup implements ISortable {
    constructor(data: string) {
      this.data = data;
    }
  
    data: string;
  
    get length(): number { 
      return this.length.data.split('');
    };

  
    swap(leftPos: number, rightPos: number):void { 
      return this.data[leftPos]. toLowerCase() > this.data[rightPos].toLowerCase()
     };
  
    compare(leftPos: number, rightPos: number): boolean { // Grab from one side, place on the other and do again until requiremnts met? };
    
  }