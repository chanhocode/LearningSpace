package ex01;

public class Main {
    public static void main(String[] args) {
        DeepCopied deepCopied = new DeepCopied(
                "클릭들 1", 1, new int [] {1, 2, 3},
                new Click(12, 34), new Click[] {new Click(12, 34), new Click(56, 78)}
        );
        DeepCopied clone1 = null;
        try {
            clone1 = (DeepCopied) deepCopied.clone();
        } catch (CloneNotSupportedException e) {
            System.out.println("복제중 오류 발생");
        }

        deepCopied.title = "제목 변경";
        deepCopied.no = 2;
        deepCopied.numbers[0] = 0;
        deepCopied.click.x = 99;
        deepCopied.clicks[0].x = 99;
    }
}
