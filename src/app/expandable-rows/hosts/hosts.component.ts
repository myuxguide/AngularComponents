import { Component } from '@angular/core';
import { HostsInterface } from './hosts.interface';

@Component({
  selector: 'app-hosts',
  templateUrl: './hosts.component.html',
  styleUrls: ['./hosts.component.css']
})

export class HostsComponent {

  name = 'Angular 5';
  dropdownList : HostsInterface[] = [];
  //  selectedItems: Map<string, Array<any>>;
   selectedItems: HostsInterface[] = []; 
   dropdownSettings = {};
  users=[{id:1},{id:2},{id:3},{id:4}];

   ngOnInit(){
      // this.selectedItems = new Map<string, Array<any>>();
        this.users
          this.dropdownList = [
              {"id":1,"itemName":"India"},
              {"id":2,"itemName":"Singapore"},
              {"id":3,"itemName":"Australia"},
              {"id":4,"itemName":"Canada"}  
            ];

        //  this.selectedItems["1"] =  [
        //      {"id":2,"itemName":"Singapore"},
        //      {"id":3,"itemName":"Australia"}
        //  ];



        this.dropdownSettings = { 
          singleSelection: false, 
          text:"Select Countries",
          selectAllText:'Select All',
          unSelectAllText:'UnSelect All',
          enableSearchFilter: true,
          classes:"myclass custom-class"
        };  

        console.log(this.selectedItems)          
   }

      onItemSelect(item:any){
      console.log(item["itemName"]);
      console.log(this.selectedItems);
   }
   OnItemDeSelect(item:any){
       console.log(item);
       console.log(this.selectedItems);
   }
   onSelectAll(items: any){
       console.log(items);
   }
   onDeSelectAll(items: any){
       console.log(items);
   }


}
