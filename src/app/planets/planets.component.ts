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
        name: 'Mercúrio',
        description: 'O planeta Mercúrio encontra-se mais perto do Sol e é considerado o menor do Sistema Solar, isso depois de Plutão ser rebaixado à categoria de planeta anão. A sua superfície é parecida com a da lua: rochosa e repleta de crateras formadas pelos impactos de meteoritos.',
        image: '../../assets/mercury.png',
      },
      {
        name: 'Vênus',
        description: 'Vénus é por vezes tido como irmão da Terra. Nalguns aspectos são muito semelhantes: Vénus é apenas um pouco mais pequeno que a Terra (95% do diâmetro da Terra, 80% da massa da Terra). Ambos têm poucas crateras, o que indica superfícies relativamente jovens.',
        image: '../../assets/venus.png',
      },
      {
        name: 'Terra',
        description: 'A Terra é considerada um planeta telúrico e possui sua estrutura interna dividida em: crosta terrestre, manto e núcleo. Além da estrutura interna, há também a externa que corresponde à litosfera, hidrosfera, biosfera e atmosfera, que são o que oferece as condições favoráveis para a existência de vida aqui.',
        image: '../../assets/earth.png',
      },
      {
        name: 'Marte',
        description: 'Marte é o quarto planeta do Sistema Solar, ficando entre a Terra e Júpiter. A 227 milhões de km do Sol, é um planeta formado por superfície rochosa e atmosfera rica em CO2. Representação de Marte, quarto planeta a partir do Sol. Em função de sua coloração, é chamado também de Planeta Vermelho.',
        image: '../../assets/mars.png',
      },
      {
        name: 'Jupiter',
        description: 'Júpiter é considerado o maior planeta do Sistema Solar, sendo rodeado de vários satélites naturais. É o quinto na ordem dos planetas tendo-se o Sol como a referência. Ouça o texto abaixo! Júpiter é o maior planeta do Sistema Solar, estando situado entre Marte e Saturno.',
        image: '../../assets/jupiter.png',
      },
    ];
    this.text = this.planets[0].description;
  }
  public handlePages = (e?: any) => {
    this.text = this.planets[e.page].description;
  };
}
