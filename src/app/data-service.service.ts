import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ResultList } from './model/last-result-model';
import { RaceList } from './model/race-model';
import { RaceResultList } from './model/raceResult-Model';
import { ChallengeClub, ChallengeClubList } from './model/challengeclub-model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

//  readonly #ANTILOB_API_URL="http://localhost:9002/api/";
//  readonly #ANTILOB_API_URL="http://192.168.0.113:8082/api/";
    readonly #ANTILOB_API_URL="http://192.168.0.106:9002/api/"
  readonly #http = inject(HttpClient);

  constructor() { 
  }

  getLastResultsList() {  
    console.log("getLastResultsList with url="+this.#ANTILOB_API_URL + "lastResultList");
    return this.#http.get<ResultList>(this.#ANTILOB_API_URL + "lastResultList");
  }

  getCalendar() {
    console.log("getCalendar with url="+this.#ANTILOB_API_URL + "raceList");
    return this.#http.get<RaceList>(this.#ANTILOB_API_URL + "raceList");
  }

  getResults() {
    console.log("getResults with url="+this.#ANTILOB_API_URL + "closedRaceList");
    return this.#http.get<RaceList>(this.#ANTILOB_API_URL + "closedRaceList");
  }

  getRaceResults(raceId:Number) {
    console.log("getRaceResults with url="+this.#ANTILOB_API_URL + "raceResults/"+raceId);
    return this.#http.get<RaceResultList>(this.#ANTILOB_API_URL + "raceResults/"+raceId);
  }

  getChallengeClub() {
    console.log("getChallengeClub with url="+this.#ANTILOB_API_URL + "challengeclub");
    return this.#http.get<ChallengeClubList>(this.#ANTILOB_API_URL + "challengeclub");
  }

  getMemberResults(memberId:Number) {
    console.log("getMemberResults memberId="+memberId);
    console.log(this.#ANTILOB_API_URL + "memberResults/"+memberId);
    return this.#http.get<RaceResultList>(this.#ANTILOB_API_URL + "memberResults/"+memberId);
  }


}
