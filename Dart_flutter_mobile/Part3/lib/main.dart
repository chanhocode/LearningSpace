void main() {

}

void main_list2() {
  // List.filled(길이, 초기값)
  List<int> fixLengthList = List.filled(20, 0);
  print('초기값이 있는 리스트: ${fixLengthList}');
  print('초기값이 있는 리스트 길이: ${fixLengthList.length}');
  // fixLengthList.add(97); // 고정길이 리스트에는 추가가 안됨.

  // 리스트의 반복처리
  List lst = [1,2,3,4,5,6,7];
  List? lst2;
  print('lst_map: ${lst}');
  lst2 = lst.map((e) => e * 2).toList();
  print('lst2_map: ${lst2}');

  List lst3 = lst.where((element) {
    // 참, 거짓
    return (element % 2 == 0);
  }).toList();
  print('lst3_where: ${lst3}');

  // remove
  lst.remove(4);
  print('lst3_remove: ${lst3}');
  // removeWhere : 나 자신을 변화
  print('lst2: ${lst2}');
  lst2.removeWhere((element) {
    return (element % 2 == 0);
  });
  print('lst2_removeWhere: ${lst2}');


}

// List 기초
void main_list1() {
  List lst = [1, 2, 3];
  print('length(리스트 내부 갯수): ${lst.length}');
  print('first(항목의 첫번째): ${lst.first}');
  print('last(항목의 마지막): ${lst.first}');
  
  print('indexOf(특정 항목의 위치): ${lst.indexOf(2)}');

  lst.insert(1, 4);
  print('insert(특정 항목의 위치애 삽입): ${lst[1]}');

  lst.add(5);
  print('add(마지막 위치애 삽입): ${lst}');

  List lst2 = [6,7,8];
  lst.addAll(lst2);
  print('addAll(리스트 자체를 붙힘): ${lst}');

  lst.sort();
  // default: 오름차순
  print('sort(오름차순): ${lst}');
  lst.sort((a,b)=>b.compareTo(a));
  print('sort(내림차순): ${lst}');

  // compareTo: = (0), > (1), < (-1)
  print('compareTo(비교): ${10.compareTo(5)}');

  // clear: 비우기
  lst.clear();
  print('clear: ${lst}');


}
