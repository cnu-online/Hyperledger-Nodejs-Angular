import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FabcarService {
  carcount=0;
  appUrl: string = " http://localhost:8080/api/";
  Payload: any;
  constructor(private http: HttpClient) {
  }
  getCarList() {
    return this.http.get<any>(this.appUrl + 'cars')
      .pipe();
  }
  getCar(carid: string) {
    return this.http.get<any>(this.appUrl + 'car?carid=' + carid)
      .pipe();
  }
  createCar(car: any) {
    return this.http.post<any>(this.appUrl + 'car', car)
      .pipe();
  }
  updateCar(car: any) {
    return this.http.post<any>(this.appUrl + 'car', car)
      .pipe();
  }
  deleteCar(carid: string) {
    return this.http.delete(this.appUrl + 'car?carid=' + carid)
      .pipe();
  }
  HistoryInfo(carid: string) {
    return this.http.get(this.appUrl + 'cars/history?carid=' + carid)
      .pipe();
  }
  createTokenheaders() {
    return new HttpHeaders().set('authorization', 'Bearer ' + this.Payload.Login.output.token).set("content-type", "application/json");
  }

}
