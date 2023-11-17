package ex04_comparable_Comparator;

import java.util.Arrays;

/*
* Comparable: 자신과 다른 객체를 비교한다.
* Comparator: 주어진 두 객체를 비교한다.
* */
public class Main {
    public static void main(String[] args) {
        Integer int1 = Integer.valueOf(1);
        Integer int2 = Integer.valueOf(2);
        Integer int3 = Integer.valueOf(3);
        // 대상보다 작을 경우: 음수, 같거나 크면: 양수
        int _1_comp_3 = int1.compareTo(3);
        int _2_comp_1 =  int2.compareTo(1);
        int _3_comp_3 =  int2.compareTo(1);
        int _t_comp_f = Boolean.valueOf(true).compareTo(Boolean.valueOf(false));
        int _abc_comp_def = "ABC".compareTo("DEF");
        int _def_comp_abc = "efgh".compareTo("abcd");

        Integer[] nums = {3,8,1,7,4,9,2,6,5};
        String[] strs = {
                "Fox", "Banana", "Elephant", "Car", "Apple", "Game", "Dice"
        };
        // Arrays 클래스의 sort 메서드는 기본적으로 compareTo에 의거하여 정렬한다.
        Arrays.sort(nums);
        Arrays.sort(strs);

        // IntDescComp
        Arrays.sort(nums, new IntDescComp());

        // CloseToInt: 기준에 가까운 순으로 정렬
        Arrays.sort(nums, new CloseToInt(5));
    }
}
