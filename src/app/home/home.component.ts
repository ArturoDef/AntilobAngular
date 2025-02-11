import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HtmlHeaderComponent } from '../html-header/html-header.component';
import { HtmlTopComponent } from '../html-top/html-top.component';
import { MenuComponent } from '../menu/menu.component';
import { LeftColumnComponent } from '../left-column/left-column.component';
import { LastResultsComponent } from '../last-results/last-results.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, HtmlHeaderComponent, HtmlTopComponent, MenuComponent, LeftColumnComponent, LastResultsComponent],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {

}
