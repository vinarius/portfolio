import { Component, OnInit, ViewEncapsulation, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-drum-machine',
  templateUrl: './drum-machine.component.html',
  styleUrls: ['./drum-machine.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DrumMachineComponent implements OnInit {

  @Input('displayMaximizable') displayMaximizable: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('changes:', changes);
    console.log('displayMax:', this.displayMaximizable);
  }

  showMaximizableDialog() {
    console.log('this.displayMaximizable:', this.displayMaximizable);
  }

}
