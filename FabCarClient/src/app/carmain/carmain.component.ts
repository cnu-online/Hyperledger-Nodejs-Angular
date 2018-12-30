import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-carmain',
  templateUrl: './carmain.component.html',
  styleUrls: ['./carmain.component.css']
})
export class CarmainComponent implements OnInit {
  selectedCar:any;
  updatelist:Date;
  constructor() { }

  ngOnInit() {
  }
  selectCar(car) {
    //alert(JSON.stringify(car));
    this.selectedCar=car;
  }
  saveCar(e)
  {
    this.updatelist=new Date();
  }
}
