import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';
@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  /**
   * 모든 게시글 불러오기
   */
  getAllBoards(): Board[] {
    return this.boards;
  }

  /**
   * 특정 게시물 불러오기
   * @param id
   */
  getBoardById(id: string): Board {
    return this.boards.find((v) => v.id === id);
  }

  /**
   * 게시글 생성
   * @param createBoardDto
   */
  createBoards(createBoardDto: CreateBoardDto) {
    const { title, description } = createBoardDto;
    const board: Board = {
      id: uuid(),
      title,
      description,
      status: BoardStatus.PUBLIC,
    };
    this.boards.push(board);
    return board;
  }

  /**
   * 특정 게시글 제거
   * @param id
   */
  deleteBoard(id: string): void {
    this.boards = this.boards.filter((v) => v.id !== id);
  }

  /**
   * 특정 게시물 상태 변경하기
   * @param id
   * @param status
   */
  updateBoardStatus(id: string, status: BoardStatus): Board {
    const board = this.getBoardById(id);
    board.status = status;
    return board;
  }
}
