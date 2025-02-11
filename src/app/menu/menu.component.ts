import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent {
  @ViewChild('aHome') aHome!: ElementRef;
  @ViewChild('ainfoclub') aInfo!: ElementRef;
  @ViewChild('elImgHome') imgHome!: ElementRef;
  updateMenu(){
    console.log("updateMenu");
    console.log("this.aInfo.nativeElement.offsetHeight = "+this.aInfo.nativeElement.offsetHeight);
    this.imgHome.nativeElement.height = this.aInfo.nativeElement.offsetHeight;
//  liHome.style.width=elImgHome.offsetWidth*1.2;
//  liHome.style.backgroundColor="white";

    this.aHome.nativeElement.style.backgroundColor="#f5f5f5";
  }
  

}
