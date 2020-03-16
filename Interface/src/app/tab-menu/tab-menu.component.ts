import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-tab-menu',
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.css']
})
export class TabMenuComponent implements OnInit {
  items: MenuItem[];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Front End', icon: 'fab fa-html5 fa-2x'},
      {label: 'Data Visualizations', icon: 'fab fa-js fa-2x'},
      {label: 'Microservices', icon: 'fab fa-node-js fa-2x'},
      {label: 'Full Stack', icon: 'fas fa-database fa-2x'}
    ];
  }

}
