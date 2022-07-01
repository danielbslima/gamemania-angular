import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { QuemComponent } from './views/quem/quem.component';
import { TrabalheComponent } from './views/trabalhe/trabalhe.component';

const routes: Routes = [

  {path: "", component: HomeComponent},
  {path: "quem", component: QuemComponent},
  {path: "trabalhe", component: TrabalheComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
