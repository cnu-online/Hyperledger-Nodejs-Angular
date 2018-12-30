import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NullTemplateVisitor } from '@angular/compiler';
import { FabcarService } from '../fabcar.service';
import { CarlistItem } from '../carlist/carlist-datasource';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent {
  @Input() carfromlist: any;
  car = { isnew: true, key: '', owner: '', make: '', model: '', colour: '' };
  formTitle = "New Car";
  @Output() savecar: EventEmitter<any> = new EventEmitter();

  carForm = this.fb.group({
    key: [null, Validators.required],
    owner: [null, Validators.required],
    make: [null, Validators.required],
    model: [null, Validators.required],
    colour: [null, Validators.required],
  });
  constructor(private fb: FormBuilder, private service: FabcarService) { }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['carfromlist']) {
      this.car.isnew = false;
      this.car.key = this.carfromlist.key;
      this.car.owner = this.carfromlist.owner;
      this.car.make = this.carfromlist.make;
      this.car.model = this.carfromlist.model;
      this.car.colour = this.carfromlist.colour;

      this.formTitle = "Car Detail";
    }
    else
      this.formTitle = "New Car";
  }

  onSubmit(e) {
    if (this.carForm.valid) {
      this.service.updateCar(this.car).subscribe(res => {
        this.savecar.emit({ car: this.car });
      });
    }
  }
  clear() {
    this.formTitle = "New Car";
    this.car = { isnew: true, key: 'CAR' + this.service.carcount.toString(), owner: '', make: '', model: '', colour: '' };
  }
}
