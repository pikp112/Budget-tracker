import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  private http = inject(HttpClient);
  apiUrl: string = 'http://localhost:3000';
  constructor() { }

  createUser(obj: any){
    return this.http.post(`${this.apiUrl}/add-user`, obj);
  }

  loginUser(obj: any){
    return this.http.post(`${this.apiUrl}/login`, obj);
  }

  getAllTransactionType(){
    return this.http.get(`${this.apiUrl}/get-all-transaction-type`);
  }

  getCategoryByUserId(id: number){
    return this.http.get(`${this.apiUrl}/get-category-by-user-id?userId=${id}`);
  }

  addNewTransaction(obj: any){
    return this.http.post(`${this.apiUrl}/add-transaction`, obj);
  }

  getTransactionByTypeId(transactionTypeId: number, userId: number){
    return this.http.get(`${this.apiUrl}/get-transaction-by-type-id?transactionTypeId=${transactionTypeId}&userId=${userId}`);
  }

  getDashboardData(userId: number, fromDate: string, toDate: string){
    return this.http.get(`${this.apiUrl}/get-dashboard-data?userId=${userId}&fromDate=${fromDate}&toDate=${toDate}`);
  }
}