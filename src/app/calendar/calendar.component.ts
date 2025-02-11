import { Component, inject } from '@angular/core';
import { DataService } from '../data-service.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [],
  templateUrl: './calendar.component.html',
  styles: '',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {

  readonly #dataService = inject(DataService);
  readonly raceList = toSignal(this.#dataService.getCalendar(),  
    {
      initialValue: [],
    }
  ) ;
}
