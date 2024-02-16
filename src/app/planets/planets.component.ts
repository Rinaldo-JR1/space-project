import { Component } from '@angular/core';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrl: './planets.component.scss',
})
export class PlanetsComponent {
  public oi: string[] = ['../../assets/bg.jpg', '../../assets/bg.jpg', '../../assets/bg.jpg'];
  constructor() { }
  public teste = (e?:any) => {
    console.dir(e)
  }
}
