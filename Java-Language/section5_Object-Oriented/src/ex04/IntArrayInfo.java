package ex04;

public class IntArrayInfo {
    int count;
    int max;
    int min;
    int sum;
    double average;

    IntArrayInfo(int[] nums) {
        count = nums.length;
        max = nums[0];
        min = nums[0];

        for(int num:nums) {
            max = max > num ? max : num;
            min = min < num ? min : num;
            sum += num;
        }
        average = 1.0 * sum / nums.length;
    }

}
