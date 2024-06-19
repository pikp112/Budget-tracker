import { Component, Input, OnInit, inject } from '@angular/core';
import { MasterService } from '../services/master.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrl: './income.component.css'
})
export class IncomeComponent implements OnInit{
  @Input() masterId: number = 0;
  private masterService = inject(MasterService);
  categoryList: any[] = [];
  transactionList: any[] = [];
  transcationObj : any = {
    "transactionId": 0,
    "userId": 0,
    "categoryId": 0,
    "amount": 0,
    "date": "2024-05-04T10:47:53.460Z",
    "purpose": "",
    "transactionTypeId": 0
  }

  constructor(){
    const loggedUser = sessionStorage.getItem('budgetUser');
    if(loggedUser != null){
      this.transcationObj.userId = JSON.parse(loggedUser).userId;
    } 
  }

  ngOnInit(): void {
    this.getAllTransactions();
  }

  getCategoryByUserId(){
    this.masterService.getCategoryByUserId(this.transcationObj.userId)
    .subscribe((res: any) => {
      console.log(res);
      this.categoryList = res.data;
    });
  }

  openModel(){
    this.getCategoryByUserId();
    const model = document.getElementById('myModal');
    if (model != null){
      model.style.display = 'block';
    }
  }

  closeModel(){
    const model = document.getElementById('myModal');
    if (model != null){
      model.style.display = 'none';
    }
  }

  getAllTransactions(){
    this.masterService.getTransactionByTypeId(this.masterId, this.transcationObj.userId)
    .subscribe((res: any) => {
      this.transactionList = res.data;
    });
  }

  onSave(){
    this.transcationObj.transactionTypeId = this.masterId;
    this.masterService.addNewTransaction(this.transcationObj).subscribe((res: any) => {
      if(res.result){
        alert('Transaction added successfully');
        this.getAllTransactions();
        this.closeModel();
      } else {
        alert(res.message);
      }
    });
  }
}
