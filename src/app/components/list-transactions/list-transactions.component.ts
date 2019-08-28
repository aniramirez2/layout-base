import { Component, OnInit } from '@angular/core';
import {TransactionsService } from '../../transactions.service'
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

}
