import { Component, inject } from '@angular/core';
import { DataService } from '../data-service.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-challengeclub',
  standalone: true,
  imports: [],
  templateUrl: './challengeclub.component.html',
  styles: ``
})
export class ChallengeclubComponent {
  readonly #dataService = inject(DataService);
  readonly challengeClubList = toSignal(
    this.#dataService.getChallengeClub(),  
    {
      initialValue: [],
    }
  ) ;
}
