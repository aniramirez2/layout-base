import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
 
  transactions = [    
      {
        id: 'ryan',
        name: 'Ryan Florence',
        email: 'ryan@reacttraining.com',
      },
      {
        id: 'michael',
        name: 'Michael Jackson',
        email: 'michael@reacttraining.com',
      },
      {
        id: 'tyler',
        name: 'Tyler McGinnis',
        email: 'tyler@reacttraining.com',
      }    
    ]
  

  constructor() { }

  getTransactions() {
    return this.transactions;    
  }
  saveTransaction(transaction:Transaction){
    this.transactions.push(transaction);
    
  }
  delete(id){
    this.transactions.splice(id,1)
  }
}
export interface Transaction {
  id: string;
  name: string;
  email:string;
}