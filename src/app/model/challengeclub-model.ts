import e from "express"

export interface ChallengeClub{
  id : Number,
  firstname : string,
  lastname: string,
  nbRace: Number,
  sumpoints : Number,
  distance: string
}

export type ChallengeClubList = ChallengeClub[];