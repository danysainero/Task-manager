import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Board } from 'src/app/_data/board';

@Injectable({
  providedIn: 'root'
})
export class BoardsProxyService {

  private url: string;

  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:3001/api/task-manager/boards';
  }

  getAllBoards(): Observable<Board[]> {
    return this.httpClient.get<Board[]>(this.url);
  }
}
