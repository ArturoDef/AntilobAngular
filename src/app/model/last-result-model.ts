export interface LastResult 
{
  id: number;
  raceName: string;
  location: string;
  distance: number;
  nbrParticipants: number;
  runnerLastname: string;
  runnerFirstname: string;
  place: number;
  time: Date;
}

export type ResultList = LastResult[];