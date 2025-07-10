import { Component } from '@angular/core';
import { Menu } from "../../components/menu/menu";
import { Welcome } from "../../components/welcome/welcome";

@Component({
  selector: 'app-home',
  imports: [Menu, Welcome],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
