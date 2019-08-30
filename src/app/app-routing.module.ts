import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListTransactionsComponent} from './components/list/list-transactions.component'
import {TransactionComponent} from './components/form/transaction.component'
const routes: Routes = [
  {path:'', component:ListTransactionsComponent},
  {path:'add', component:TransactionComponent},
  {path:'edit/:id', component:TransactionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
