import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipeComponent, SubscribeComponent } from './containers';

const routes: Routes = [
    {path: '', pathMatch: 'full', component: PipeComponent},
    {path: '1', pathMatch: 'full', component: SubscribeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
