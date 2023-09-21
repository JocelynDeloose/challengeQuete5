import { publish } from "rxjs/operators";

export class User {

  constructor(
    public email: string,
    public firstname: string,
    public lastname: string,
    public password: string
  ){
    
  }
}