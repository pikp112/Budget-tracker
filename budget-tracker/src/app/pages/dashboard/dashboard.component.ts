import { Component, OnInit, inject } from '@angular/core';
import { MasterService } from '../services/master.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  private masterService = inject(MasterService);
  fromDate: string = '';
  toDate: string = '';
  loggedUserId: number = 0;
  dashBoardData: any;

  ngOnInit(): void {
    const loggedUser = sessionStorage.getItem('budgetUser');
    if(loggedUser != null){
      this.loggedUserId = JSON.parse(loggedUser).userId;
    }
  }

  getDashBoardData(){
    this.masterService.getDashboardData(this.loggedUserId, this.fromDate, this.toDate)
    .subscribe((res: any) => {
      this.dashBoardData = res.data;
    });
  }
}