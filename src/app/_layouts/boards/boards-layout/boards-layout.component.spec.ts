import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardsLayoutComponent } from './boards-layout.component';

describe('BoardsLayoutComponent', () => {
  let component: BoardsLayoutComponent;
  let fixture: ComponentFixture<BoardsLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardsLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
