import { Component, OnInit } from '@angular/core';
import {TransactionsService} from '../../providers/transactions.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  busca="";
  constructor(
    private transactionsService: TransactionsService
  ) { }

  ngOnInit() {
    //this.balance = this.transactionsService.getTransactions().reduce();
  }

}
