import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hosts',
  templateUrl: './hosts.component.html',
  styleUrls: ['./hosts.component.css']
})
export class HostsComponent implements OnInit {
  name = "Temp Name";
  dropDownList = [];
  selectedItems: Map<string, Array<any>> | undefined;

  dropDownSettings = {};
  hostsElement: HostsLists | null | undefined;

  hostsLists = [
    {
      id: 1
    },
    {
      id: 2
    },
    {
      id: 3
    },
    {
      id: 4
    },
    {
      id: 5
    }
  ]

  constructor() { }

  ngOnInit(): void {
    this.selectedItems = new Map<string, Array<any>>();
    this.hostsLists
    this.dropDownList = [
      {"id":1,"itemName":"India"},
      {"id":2,"itemName":"Singapore"},
      {"id":3,"itemName":"Australia"},
      {"id":4,"itemName":"Canada"},
      {"id":4,"itemName":"UK"}
    ];

    this.dropDownSettings = { 
      singleSelection: false, 
      text:"Select Countries",
      selectAllText:'Select All',
      unSelectAllText:'UnSelect All',
      enableSearchFilter: true,
      classes:"myclass custom-class"
    }
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

export interface HostsLists{
  id: number;
  itemName: string;
}