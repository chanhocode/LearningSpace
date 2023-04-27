// 게시글 타입 결정 두 가지 상태 이외의 결과 값이 나올 수 없게 한다.
export enum BoardStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
export interface Board {
  id: string;
  title: string;
  description: string;
  status: BoardStatus;
}
