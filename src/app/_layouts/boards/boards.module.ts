import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragulaModule } from 'ng2-dragula';
import { BoardComponent } from '../../shared/board/board.component';
import { BoardsLayoutComponent } from './boards-layout/boards-layout.component';

@NgModule({
  declarations: [
    BoardsLayoutComponent,
    BoardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    DragulaModule.forRoot(),
    DragulaModule
  ],
  exports: [BoardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BoardsModule { }
