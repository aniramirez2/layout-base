import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TransactionComponent } from './components/form/transaction.component';
import { ListTransactionsComponent } from './components/list/list-transactions.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TransactionComponent,
    ListTransactionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
