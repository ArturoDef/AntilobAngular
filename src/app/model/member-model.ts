export interface Member{
  id : Number,
  firstname : string,
  lastname: string,
  email: string,
  address : string,
  zipcode : string,
  city : string,
  dateOfBirth: string,
  gender : string,
  phoneNumber: string,
  mobileNumber: string
}

export type MemberList = Member[];