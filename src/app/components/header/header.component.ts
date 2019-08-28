import { Component, OnInit } from '@angular/core';
import {TransactionsService} from '../../transactions.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  balance = 90;
  constructor(
    private transactionsService: TransactionsService
  ) { }

  ngOnInit() {
    //this.balance = this.transactionsService.getTransactions().reduce();
  }

}
