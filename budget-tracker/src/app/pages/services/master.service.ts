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
}
