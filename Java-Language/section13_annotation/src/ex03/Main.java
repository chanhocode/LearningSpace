package ex03;

import java.lang.annotation.Retention;

public class Main {

    // Count
    @Count(value = 3)
    private int apples;

    @Count // default가 있을 시 생략 가능
    private int bananas;

    @Count(5) // 필드가 하나고 필드명이 value일 시 값만 넣을 수 있다.
    private int cacaos;

    // PersonName
    // 값이 여럿일 시. 입력 순서 무관
    @PersonName(last = "홍", first = "길동")
    private Object seller;

    // PersonInfo
    @PersonInfo(
            personName = @PersonName(last ="전", first = "우치"),
            age = 30,
            married = true
    )
    private Object sellerInfo;

    // LocaAvail
    @LocsAvail(
            quick = {"서울", "판교"},
            visit = "강원",
            delivery = {}
    )
    private Object store;
}
