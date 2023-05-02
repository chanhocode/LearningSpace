import { Repository } from 'typeorm';
import { Board } from './board.entity';
import { EntityRepository } from '../customDecorator/typeorm-custom.decorator';

@EntityRepository(Board)
export class BoardRepository extends Repository<Board> {}
