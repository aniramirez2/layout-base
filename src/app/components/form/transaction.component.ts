import { Component, OnInit } from '@angular/core';
import {Transaction, TransactionsService} from '../../transactions.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  transaction: Transaction;
  nome: string;
  email: string;
 
  constructor(private transactionService: TransactionsService) { }
  
  ngOnInit() {
  }
  register(){
    this.transaction = {
      nome: this.nome,
      email: this.email,
    }
    this.transactionService.saveTransaction(this.transaction);
    console.log('list ', this.transactionService.getTransactions())
  }
}
