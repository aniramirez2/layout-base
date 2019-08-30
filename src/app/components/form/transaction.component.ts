import { Component, OnInit } from '@angular/core';
import {Transaction, TransactionsService} from '../../providers/transactions.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  transaction: Transaction;
  nome: string;
  email: string;
  id: string;
  urlId;
  index: number;
  constructor(private transactionService: TransactionsService,
    private route: ActivatedRoute) { }
  
  ngOnInit() {
     this.route.params.subscribe(params => {
      this.urlId = params;
      console.log('url',this.urlId)
      if(this.urlId.id != undefined){
        this.edit(this.urlId.id)
      }
    });
  }
  register(){
    if(this.urlId != undefined){
      this.delete(this.index);
    }
    this.transaction = {
      id:this.nome,
      name: this.nome,
      email: this.email,
    }
    this.transactionService.saveTransaction(this.transaction);
    alert("Cadastro sucesso")
    this.nome= "";
    this.email ="";
    this.id=";"
    console.log('list ', this.transactionService.getTransactions())
  }
  edit(id){
    var toEdit =this.transactionService.getTransactions().find(x => x.id === id);
    this.nome = toEdit.name;
    this.email= toEdit.email;
    this.index =this.transactionService.getTransactions().findIndex(x => x.id === id);
    
  }
  delete(id){
    this.transactionService.delete(id);
  }
}
