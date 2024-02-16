import { Component } from '@angular/core';
import { planets } from '../types/planets';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrl: './planets.component.scss',
})
export class PlanetsComponent {
  public planets: planets[];
  public text = 'Planets';
  constructor() {
    this.planets = [
      {
        name: 'Marte',
        description: 'Marte é o quarto planeta do Sistema Solar, ficando entre a Terra e Júpiter. A 227 milhões de km do Sol, é um planeta formado por superfície rochosa e atmosfera rica em CO2. Representação de Marte, quarto planeta a partir do Sol. Em função de sua coloração, é chamado também de Planeta Vermelho.',
        image: '../../assets/mars.png',
      },
      {
        name: 'Mars',
        description: 'Mars2',
        image: '../../assets/mars.png',
      },
    ];
    this.text = this.planets[0].description;
  }
  public handlePages = (e?: any) => {
    this.text = this.planets[e.page].description;
  };
}
