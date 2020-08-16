import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardsLayoutComponent } from './_layouts/boards/boards-layout/boards-layout.component';


const routes: Routes = [
  { path: '', redirectTo: 'boards', pathMatch: 'full' },
  { path: 'boards', component: BoardsLayoutComponent },
  { path: 'board',  loadChildren: () => import('./_layouts/cards/cards.module').then(m => m.CardsModule) },
  { path: '**', redirectTo: 'boards'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
