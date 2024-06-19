import { Component } from '@angular/core';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrl: './income.component.css'
})
export class IncomeComponent {


  openModel(){
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
}
