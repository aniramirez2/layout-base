import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
 
  transactions = [
      
    ]
  

  constructor() { }

  getTransactions() {
    return this.transactions;    
  }
  saveTransaction(transaction:Transaction){
    this.transactions.push(transaction);
    
  }
}
export interface Transaction {
  nome: string;
  email:string;
}