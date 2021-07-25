import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbbonamentiComponent } from './abbonamenti/abbonamenti.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'abbonamenti', component: AbbonamentiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
