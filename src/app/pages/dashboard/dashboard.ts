import { Component, inject, OnInit } from '@angular/core';
import { Card } from "../../components/card/card";
import { CarTable } from "../../components/car-table/car-table";
import { DashboardService } from '../../services/dashboard.service';
import { Carro, VinInfos } from '../../models/car';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [Card, CarTable],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit{
 dashboardService = inject(DashboardService)

 veiculos: Carro[] = []
  veiculoSelecionado: Carro = {
  id: -1,
  connected: 0,
  volumetotal: 0,
  softwareUpdates: 0,
  vehicle: "",
  img: "",
  vin: "",
}

vinInfos: VinInfos = {
    id: -1,
    lat: 0,
    long: 0,
    nivelCombustivel: 0,
    odometro: 0,
    status: "",
  }

  ngOnInit() {
    this.dashboardService.getVehicles().subscribe({
      error: () => {},
      next: (veiculos) => {
        this.veiculos = Object.values(veiculos) as Carro[]
        this.veiculoSelecionado = veiculos[0]
        console.log(this.veiculoSelecionado)

        this.dashboardService.getVinInf(this.veiculoSelecionado.vin).subscribe({
        error: () => {},
        next: (vinInfos) =>{
          this.vinInfos = vinInfos
        }
        })
      }
    })
  }
  onChangeSelect(event: Event ){
    const id =  Number((event.target as HTMLSelectElement).value)
    const carro = this.veiculos.find((carro) => carro.id === id)
    if(carro){
      this.veiculoSelecionado = carro
    }
    this.dashboardService.getVinInf(this.veiculoSelecionado.vin).subscribe({
        error: () => {},
        next: (vinInfos) =>{
          this.vinInfos = vinInfos
        }
        })
  }
  onEditVin(){
    
  }

router = inject(Router)
logout(){
  sessionStorage.clear()
  this.router.navigate([""])
}

}


