import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DataService } from '../data-service.service';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [],
  templateUrl: './results.component.html',
  styleUrls: ['../calendar/calendar.component.css']
})
export class ResultsComponent {
  readonly #dataService = inject(DataService);
  readonly raceList = toSignal(this.#dataService.getResults(),  
    {
      initialValue: [],
    }
  ) ;

}
