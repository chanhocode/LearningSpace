package ex09;

import java.io.Serializable;

// Serialization: 인스턴스를 바이트 스트림으로 변환
public class Person implements Serializable {
    // serialVersionUID: 클래스의 버전 번호로 사용
    private static final long serialVersionUID = 1L;
    private String name;
    private int age;
    private double height;
    private boolean married;

    // transient: 직렬화에서 제외
    transient private String bloodType;
    transient private double weight;

    // 직렬화에 포함되려면 해당 클래스도 Serializable 구현
    private Career career;

    public Person(
            String name, int age, double height, boolean married,
            String bloodType, double weight, Career career
    ) {
        this.name = name;
        //this.fullName = name;
        this.age = age;
        this.height = height;
        this.married = married;
        this.bloodType = bloodType;
        this.weight = weight;
        this.career = career;
    }
}
