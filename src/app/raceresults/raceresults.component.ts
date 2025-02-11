import { Component, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DataService } from '../data-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Race } from '../model/race-model';
import { Result } from '../model/raceResult-Model';
import { ResultList } from '../model/last-result-model';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-raceresults',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './raceresults.component.html',
  styles: ``
})
export class RaceResultsComponent {
  readonly route = inject(ActivatedRoute);
  readonly #dataService = inject(DataService);
  readonly raceId = Number(this.route.snapshot.paramMap.get('id'));
  //readonly raceId = 24040;
  readonly results = toSignal(
    this.#dataService.getRaceResults(this.raceId),  
    {
      initialValue: [],
    }
  ) ;
  constructor() { 
    effect(() => {
      console.log("Number of results: "+this.results().length);
  })}
}
