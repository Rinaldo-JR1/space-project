import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlanetsComponent } from './planets/planets.component';
import { LinksComponent } from './links/links.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'planets',component: PlanetsComponent},
  {path: 'links',component: LinksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
