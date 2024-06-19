import { Component, OnInit, inject } from '@angular/core';
import { MasterService } from '../services/master.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  selectedTab: string = 'Dashboard';
  transactionList: any[] = [];
  incomeMasterId: number = 0;
  expenseMasterId: number = 0;
  private masterService = inject(MasterService);

  ngOnInit(){
    this.getTransactionType();
  }

  changeTab(tabName: string){
    this.selectedTab = tabName;
  }

  getTransactionType(){
    this.masterService.getAllTransactionType().subscribe((res: any) => {
      this.transactionList = res.data;
      const income = this.transactionList.find(m => m.masterName == 'Income');
      if (income){
        this.incomeMasterId = income.masterId;
      }
      const expense = this.transactionList.find(m => m.masterName == 'Expense');
      if (expense){
        this.expenseMasterId = expense.masterId;
      }
    });
  }
}
