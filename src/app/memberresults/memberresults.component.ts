import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data-service.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-memberresults',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './memberresults.component.html',
  styles: ``
})
export class MemberresultsComponent {
  readonly route = inject(ActivatedRoute);
  readonly #dataService = inject(DataService);
  readonly memberId = Number(this.route.snapshot.paramMap.get('id'));
  //readonly raceId = 24040;
  readonly results = toSignal(
    this.#dataService.getMemberResults(this.memberId),  
    {
      initialValue: [],
    }
  ) ;


  readonly resultsOk = computed<boolean>(() => {
      let ok=false
      console.log("Test if resultsOk");
      console.log("this.results valid:"+(this.results()?"true":"false"));
      console.log("this.results.length>0:"+((this.results()?.length>0)?"true ("+this.results()?.length+")":"false"));
      console.log("this.results()[0]?.member.id:"+this.results()[0]?.member.id);
      if(this.results() && this.results().length>0 && this.results()[0]?.member.id) {
        ok = true;
      }
      return ok;
    });  
}
