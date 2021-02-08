import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-drum-machine',
  templateUrl: './drum-machine.component.html',
  styleUrls: ['./drum-machine.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DrumMachineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayMaximizable: boolean;

  showMaximizableDialog() {
    this.displayMaximizable = true;
  }

}
