import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs';
import { BoardsProxyService } from './../../../_services/proxy/boards-proxy.service';

@Component({
  selector: 'app-boards-layout',
  templateUrl: './boards-layout.component.html',
  styleUrls: ['./boards-layout.component.scss']
})
export class BoardsLayoutComponent implements OnInit, OnDestroy {
  newBoardForm: FormGroup;
  boards;
  BOARDS = 'BOARDS';
  subs = new Subscription();

  constructor(private boardsProxy: BoardsProxyService, private dragulaService: DragulaService) {
    this.subs.add(this.dragulaService.dropModel(this.BOARDS)
      .subscribe()
    );

    /* dragulaService.createGroup('BOARDS', {
      moves(el: any, container: any, handle: any): any {
        if (el.classList.contains('board-new')) {
          return false;
        }
        return true;
      }
    }); */
  }

  ngOnInit(): void {
    this.newBoardForm = new FormGroup({
      boardTitle: new FormControl('', [Validators.required]),
      boardDescription: new FormControl('', [Validators.required])
    });

    this.boardsProxy.getAllBoards().subscribe((data) => this.boards = data);
  }


  addBoard() {
    console.log(this.newBoardForm.value);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
