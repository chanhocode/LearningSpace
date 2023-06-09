import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardRepository } from './board.repository';
import { Board } from './board.entity';
import { User } from '../auth/user.entity';

@Injectable()
export class BoardsService {
  constructor(private boardRepository: BoardRepository) {}
  /**
   * 모든 게시글 불러오기
   */
  async getAllBoards(user: User): Promise<Board[]> {
    const query = this.boardRepository.createQueryBuilder('board');

    query.where('board.userId = :userId', { userId: user.id });
    const boards = await query.getMany();
    return boards;
  }

  /**
   * 특정 게시물 불러오기
   * @param id
   */
  async getBoardById(id: number): Promise<Board> {
    const found = await this.boardRepository.findOne({
      where: {
        id,
      },
    });
    if (!found) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
    return found;
  }

  /**
   * 게시글 생성
   * @param createBoardDto
   */
  createBoards(createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardRepository.createBoard(createBoardDto);
  }

  /**
   * 특정 게시글 제거
   * @param id
   */
  async deleteBoard(id: number, user: User): Promise<void> {
    const result = await this.boardRepository
      .createQueryBuilder('board')
      .delete()
      .from(Board)
      .where('userId = :userId', { userId: user.id })
      .andWhere('id = :id', { id: id })
      .execute();
    if (result.affected === 0) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
    return;
  }

  /**
   * 특정 게시물 상태 변경하기
   * @param id
   * @param status
   */
  async updateBoardStatus(id: number, status: BoardStatus): Promise<Board> {
    const board = await this.getBoardById(id);

    board.status = status;
    await this.boardRepository.save(board);

    return board;
  }
}
