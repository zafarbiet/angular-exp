import { Directive, ElementRef, HostListener, Input, Renderer2 } from "@angular/core";
import { Employee } from "./employee";
import { Sort } from "./sort";

@Directive({
  selector: '[appSort]'
})

export class SortDirective {
  @Input()
  appSort: Employee[];

  constructor(private renderer: Renderer2, private targetElemwnt: ElementRef){
    this.appSort = [];
  }

  @HostListener("click")

  sortData() {
    const sort =new Sort();
    const elem = this.targetElemwnt.nativeElement;
    const order = elem.getAttribute("data-order");
    const property =elem.getAttribute("data-name");

    this.appSort.sort(sort.startSort(property, order));
    if(order === "desc") {
      elem.setAttribute("data-order", "asc");
    }else{
      elem.setAttribute("data-order", "desc");
    }
  }

}
