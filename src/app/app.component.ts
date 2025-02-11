import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { app } from '../../server';
import { HtmlHeaderComponent } from './html-header/html-header.component';
import { HtmlTopComponent } from './html-top/html-top.component';
import { MenuComponent } from './menu/menu.component';
import { LeftColumnComponent } from './left-column/left-column.component';
import { LastResultsComponent } from './last-results/last-results.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HtmlHeaderComponent, HtmlTopComponent, MenuComponent, LeftColumnComponent, LastResultsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'antilobsite';
}
