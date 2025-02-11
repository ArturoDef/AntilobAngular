import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DataService } from '../data-service.service';
import { KeyValue, KeyValuePipe } from '@angular/common'; 
import { LastResult, ResultList } from '../model/last-result-model';
import { last } from 'rxjs';

@Component({
  selector: 'last-results',
  standalone: true,
  imports: [KeyValuePipe],
  templateUrl: './last-results.component.html',
  styles: ``
})
export class LastResultsComponent {
  readonly #dataService = inject(DataService);
  readonly resultList = toSignal(this.#dataService.getLastResultsList(),
    {
      initialValue: [],
    }
  ) ;

  currentRaceid: Number = -1;

  updateRaceId(id: Number) {
    this.currentRaceid = id;
    console.log("updateRaceId: " + id);
  }



  groupedData =  computed(() => this.getGroupedData());

  getGroupedData () {
    let gd:ResultList[]= [];
    let raceName: string = "";
    let i=-1;
    raceName = "";
    this.resultList().forEach(item => {      
      if (raceName != item.raceName) {        
        i++;
        gd[i] = [];
        gd[i].push(item);
      }
      else{
        gd[i].push(item);
      }
      raceName = item.raceName
    });
    return gd;
  };

  readonly loading = computed (()=>this.resultList().length==0);
}

