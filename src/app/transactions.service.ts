import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  balance = 90;
  transactions = [
      {
        "type": "WITHDRAW",
        "value": -10,
        "updatedAt": 1533270651427,
        "id": 1, 
        "description": "lorem ipsum hello"
      },
      {
        "type": "DEPOSIT",
        "value": 50,
        "updatedAt": 1533270663879,
        "id": 2,
        "description": "lorem ipsum hello"
      },
      {
        "type": "DEPOSIT",
        "value": 10,
        "updatedAt": 1533399402946,
        "id": 3,
        "description": "lorem ipsum hello"
      },
      {
        "type": "DEPOSIT",
        "value": 10,
        "updatedAt": 1533399430175,
        "id": 4,
        "description": "lorem ipsum hello"
      },
      {
        "type": "DEPOSIT",
        "value": 10,
        "updatedAt": 1533399444103,
        "id": 5,
        "description": "lorem ipsum hello"
      },
      {
        "type": "DEPOSIT",
        "value": 10,
        "updatedAt": 1533399810279,
        "id": 6,
        "description": "lorem ipsum hello"
      },
      {
        "type": "DEPOSIT",
        "value": 10,
        "updatedAt": 1533400042381,
        "id": 7,
        "description": "lorem ipsum hello"
      }
    ]
  

  constructor() { }

  getTransactions() {
    return this.transactions;    
  }
  saveTransaction(transaction:Transaction){
    this.transactions.push(transaction);
    this.balance += transaction.value;
    
  }
}
export interface Transaction {
  type: string;
  value: number;
  updatedAt: number;
  id: number;
  description:string;
}