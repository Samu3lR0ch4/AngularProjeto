import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carro, VinInfos } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
http = inject(HttpClient)

 getVehicles(): Observable<Carro[]> {
  return this.http.get<Carro[]>("http://localhost:3001/vehicles")
 }

 getVinInf(vin: string){
return this.http.post<VinInfos>("http://localhost:3001/vehicleData", {vin})
 }
}
