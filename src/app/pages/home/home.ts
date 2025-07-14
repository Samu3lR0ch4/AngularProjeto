import { Component, inject } from '@angular/core';
import { Menu } from "../../components/menu/menu";
import { Welcome } from "../../components/welcome/welcome";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Menu, Welcome],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
router = inject(Router)

logout(){
  sessionStorage.clear()
  this.router.navigate([""])
}
} 
