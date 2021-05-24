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
   selectedItems: HostsInterface[] = []; 
   dropdownSettings = {};
  hosts=[{id:1}];

   ngOnInit(){
      // this.selectedItems = new Map<string, Array<any>>();
        this.hosts
          this.dropdownList = [
              {"id":1,"itemName":"Host 1"},
              {"id":2,"itemName":"Host 2"},
              {"id":3,"itemName":"Host 3"},
              {"id":4,"itemName":"Host 4"}  
            ];

        this.dropdownSettings = { 
          singleSelection: false, 
          text:"Select Hosts",
          selectAllText:'Select All Hosts',
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

   SelectedHosts(items: any){
    this.selectedItems
   }
}
