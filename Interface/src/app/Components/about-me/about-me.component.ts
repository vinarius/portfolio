import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isShowingAboutMeDetails: boolean = false;
  isChecked: boolean = false;

  toggleViewDetails(): void {
    this.isShowingAboutMeDetails = !this.isShowingAboutMeDetails;
  }

}
