import { Component } from '@angular/core';

@Component({
  selector: 'app-serach',
  templateUrl: './serach.component.html',
  styleUrl: './serach.component.css'
})
export class SerachComponent {
  searchText: string= '';
  searchedValue: string= '';
  updateSearchText(event: any){
    this.searchText = event.target.value;
  }

}
