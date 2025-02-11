import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HtmlHeaderComponent } from '../html-header/html-header.component';
import { HtmlTopComponent } from '../html-top/html-top.component';
import { MenuComponent } from '../menu/menu.component';
import { LeftColumnComponent } from '../left-column/left-column.component';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [RouterOutlet,HtmlHeaderComponent, HtmlTopComponent, MenuComponent, LeftColumnComponent],
  templateUrl: './page.component.html',
  styles: ``
})
export class PageComponent {
 
  pageName = "";

  constructor() {
    this.pageName = "Page";
    console.log("PageComponent constructor");
  }
}
