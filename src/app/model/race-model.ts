import { Challenge } from "./challenge-model";

export interface Race{
  
  id: Number,
  internalChallenge: Number,
  racedate: string,
  location: string,
  country: string,
  name: string,
  challenge: Challenge,
  km: Number,
  meter: Number,
  nbrparticipants: Number,
  nbrclub: Number,
  homepage: Boolean,
  url: string,
  memberCount: Number,
  distance: Number,
  date: string,
  mainRaceId: Number
}
export type RaceList = Race[];
