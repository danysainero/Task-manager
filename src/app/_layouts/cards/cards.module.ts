import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsLayoutComponent } from './cards-layout/cards-layout.component';

const ROUTES: Routes = [
  {
    path: ':id',
    component: CardsLayoutComponent,
  }
];

@NgModule({
  declarations: [
    CardsLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class CardsModule { }
