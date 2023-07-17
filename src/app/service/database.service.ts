import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  public users : any = [
    {
      userID: "user1",
      fullName: "Jerick Untiveros",
      address:"Tinga Itaas Batangas City",
      contactNumber:"0912345678",
      email: "untiverosjerick@gmail.com",
      password: "jerick123"
    },
    {
      userID: "user2",
      fullName: "Lea Marie Fiedacan",
      address:"Alangilan Batangas City",
      contactNumber:"0923456789",
      email: "leamariefiedacan@gmail.com",
      password: "lea123"
    },
    {
      userID: "user3",
      fullName: "Dawit Merilyn",
      address:"Sorosoro Batangas City",
      contactNumber:"0934567891",
      email: "dawitmerilyn@gmail.com",
      password: "dawit123"
    },
    {
      userID: "user4",
      fullName: "JBerto Martinez",
      address:"Bagong Bayan Batangas City",
      contactNumber:"0945678912",
      email: "martinezjberto@gmail.com",
      password: "martinez123"
    },
    {
      userID: "user5",
      fullName: "Juan Dela Cruz",
      address:"Kahit Saan Batangas City",
      contactNumber:"09567891234",
      email: "delacruzjuan@gmail.com",
      password: "juan123"
    },
    {
      userID: "user6",
      fullName: "Emong Manalo",
      address:"Alangilan Batangas City",
      contactNumber:"09678912345",
      email: "manaloemong@gmail.com",
      password: "manaloz123"
    },
    {
      userID: "user7",
      fullName: "Kate Dela Cruz",
      address:"Mahangin Batangas City",
      contactNumber:"09789123456",
      email: "delacruzkate@gmail.com",
      password: "delacruz123"
    },
    {
      userID: "user8",
      fullName: "Jake Manalo",
      address:"Ilog Batangas City",
      contactNumber:"09891234567",
      email: "manalojake@gmail.com",
      password: "manalo123"
    },
    
    
  ]

  constructor() { }
}
