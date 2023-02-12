import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'percentage'
})
export class Percentagepipes implements PipeTransform{

  transform(value: number,TotalMarks:number,decimal:number) {
return (value/TotalMarks*100).toFixed(decimal)
  }
}
