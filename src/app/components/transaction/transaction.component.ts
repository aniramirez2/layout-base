import { Component, OnInit } from '@angular/core';
import {Transaction, TransactionsService} from '../../transactions.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  transaction: Transaction;
  transactionValue: number;
  transactionDescription: string;
  transactionType: string;
 
  constructor(private transactionService: TransactionsService) { }
  
  ngOnInit() {
    this.transactionType = 'DEPOSIT';
  }
  validateCheck(e){
    this.transactionType= e.target.value
    
  }
  validateTypeNumber(type){
    if (type == 'WITHDRAW') {
      this.transactionValue = -this.transactionValue;
    }
  }
  register(){
    this.transactionValue=Number(this.transactionValue);
    var id = this.transactionService.getTransactions().length+1;
    this.validateTypeNumber(this.transactionType);
    this.transaction = {
      type: this.transactionType,
      value: this.transactionValue,
      updatedAt: Date.now(),
      id: id ,
      description:this.transactionDescription,
    }
    this.transactionService.saveTransaction(this.transaction);
    console.log('list ', this.transactionService.getTransactions())
  }
  add(){
    this.transactionValue = Number(this.transactionValue)+1;
  }
  min(){
    this.transactionValue = Number(this.transactionValue)-1;
  }
}
