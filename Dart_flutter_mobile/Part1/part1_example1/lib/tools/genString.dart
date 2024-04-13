import 'dart:math';

class GenString {
  static getGString(int len) {
    var r = Random();
    var chars = "ab cdef ghij klmno pqrx tuv wxyz";

    return List.generate(len, (index) => chars[r.nextInt(chars.length)]).join();
  }
}