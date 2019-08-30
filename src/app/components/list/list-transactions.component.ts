import { Component, OnInit } from '@angular/core';
import {TransactionsService } from '../../providers/transactions.service'
@Component({
  selector: 'app-list-transactions',
  templateUrl: './list-transactions.component.html',
  styleUrls: ['./list-transactions.component.scss']
})
export class ListTransactionsComponent implements OnInit {

  transactions = [];

  constructor(
    private transactionService: TransactionsService
    ) { }

  ngOnInit() {
    this.transactions = this.transactionService.getTransactions();
  }
  delete(id){
    var index =this.transactionService.getTransactions().findIndex(x => x.id === id);
    this.transactionService.delete(index)
  }
}
