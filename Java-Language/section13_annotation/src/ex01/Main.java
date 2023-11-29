package ex01;


import java.util.ArrayList;

/*
* Annotation: 소스코드에 메타 데이터를 추가
* // 메타데이터: 데이터에 대한 정보를 나타내는 데이터
*
* Ex)
* @Deprecated: 더 이상 사용되지 않는다는 것을 표시
* @Override: 오버라이드 되는 메소드
* @FunctionalInterface: 함수형 인터페이스임을 명시
* @SuppressWarnings: 컴파일러의 경고를 무시
* */
public class Main {

    /*
    * Deprecated: 앞으로 사용하지 말 것
    * 사용해도 오류는 안나지만, 새 기능으로 대체하기 위해 사용
    * */
    @Deprecated
    public static void deprecatedMethod() {
        System.out.println("...");
    }

    // suppressWarnings: 컴파일의 경고 무시
    @SuppressWarnings("unchecked")
    public static void warnedMethod() {
        ArrayList list = new ArrayList();
        list.add("감자");
        list.add("옥수수");
        list.add("고구마");
        System.out.println(list);
    }
}
