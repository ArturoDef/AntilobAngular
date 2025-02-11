import { Race } from "./race-model";
import { Member } from "./member-model";

export interface Result{
  
  race: Race,
  member: Member,
  place: Number,
  time: string,
  points: Number
}
export type RaceResultList = Result[];
