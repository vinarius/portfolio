import { Component, OnInit, ViewEncapsulation, Input, SimpleChanges } from '@angular/core';

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

  displayMaximizable: boolean = false;
  windowHeight: string = '75vh';

  showMaximizableDialog() {
    this.displayMaximizable = true;
  }
}
