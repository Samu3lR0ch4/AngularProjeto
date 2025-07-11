import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {
router = Inject(Router)
VaParaDashboard(){
  this.router.navigate(["/dashboard"])
}
VaParaHome(){
  this.router.navigate(["/home"])
}

}

